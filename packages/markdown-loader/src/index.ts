import  marked from "./utils/marked";
import xss from "xss";
import getMarkdownCode from "./utils/getMarkdownCode";
import fm from "front-matter";
import babelParse from "./utils/babelParse";
import { dangerouslySetInnerHTMLToJsx } from "./utils/jsx";
import traverse from "@babel/traverse";
import {
  Identifier,
  identifier,
  jsxAttribute,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  stringLiteral,
  variableDeclaration,
  variableDeclarator,
} from "@babel/types";
import { Node, template, transformFromAstSync } from "@babel/core";
import generate from "@babel/generator";

function loader(rawContent: string) {
  const source = fm<{ [key: string]: any }>(rawContent);
  let code = getMarkdownCode(source.body);
  let finalCode=''
  if (code) {
    const codeOriginAst = babelParse(
      dangerouslySetInnerHTMLToJsx(
          marked(`\`\`\`js\n${code}\n\`\`\``)
      )
    );
    let codePreviewBlockAst;
    traverse(codeOriginAst, {
      JSXElement: (_path) => {
        codePreviewBlockAst = _path.node;
        _path.stop();
      },
    });
    const ast = babelParse(code);
    traverse(ast, {
      ExportDefaultDeclaration(_path) {
        const codeAttrs = [];
        let tsCodePreviewBlockAst;
        const tsCodeAst = babelParse(
          dangerouslySetInnerHTMLToJsx(
              marked(`\`\`\`js\n${code}\n\`\`\``)
          )
        );
        traverse(tsCodeAst, {
          JSXElement: (_path) => {
            tsCodePreviewBlockAst = _path.node;
            _path.stop();
          },
        });
        codeAttrs.push(
          jsxAttribute(jsxIdentifier("tsx"), tsCodePreviewBlockAst)
        );
        const declaration = _path.node.declaration as Identifier;
        const identifierName = declaration.name;
        const children = [codePreviewBlockAst];
        const returnElement = jsxElement(
          jsxOpeningElement(jsxIdentifier(identifierName), []),
          jsxClosingElement(jsxIdentifier(identifierName)),
          []
        );
        const demoCellElement = jsxElement(
          jsxOpeningElement(jsxIdentifier("cell-demo"), []),
          jsxClosingElement(jsxIdentifier("cell-demo")),
          [returnElement]
        );
        const codeCellElement = jsxElement(
          jsxOpeningElement(jsxIdentifier("cell-code"), codeAttrs),
          jsxClosingElement(jsxIdentifier("cell-code")),
          children
        );
        const codeBlockElement = jsxElement(
          jsxOpeningElement(jsxIdentifier("code-block-wrapper"), [
            jsxAttribute(jsxIdentifier("id"), stringLiteral("titletest")),
          ]),
          jsxClosingElement(jsxIdentifier("code-block-wrapper")),
          [demoCellElement, codeCellElement]
        );
        const app = variableDeclaration("const", [
          variableDeclarator(identifier("__export"), codeBlockElement),
        ]);
        _path.insertAfter(app);
        _path.remove();
      },
    });
    const { code:codeResult } = transformFromAstSync(ast, null,{
      filename: '',
      // presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      // plugins: [
      //   '@babel/plugin-proposal-export-default-from',
      //   '@babel/plugin-transform-runtime',
      //   '@babel/plugin-syntax-dynamic-import',
      //   '@babel/plugin-proposal-class-properties',
      //   '@babel/plugin-transform-react-jsx-source',
      // ],
    });
    const buildRequire = template(`
        const NAME = React.memo(() => {
          AST
          return __export;
        })
      `);

    const finalAst = buildRequire({
      NAME: "demo",
      AST: codeResult,
    });
    finalCode = generate(finalAst as Node).code;
  }
  return finalCode
    ? ` import React from 'react';
    import CellDemo from 'components/CellDemo';
    import CellCode from 'components/CellCode';
    import CodeBlockWrapper from 'components/CodeBlockWrapper';
    ${finalCode};export default demo;`
    : `
    import React from 'react';
const App = () => {
    return (
      <>
      ${xss(marked(source.body, { xhtml: true }))
        .replace(/class=/g, "className=")
        .replace(/{/g, '{"{"{')
        .replace(/}/g, '{"}"}')
        .replace(/{"{"{/g, '{"{"}')}
      </>
    );
};
export default App;
    `;
}
export default loader;
