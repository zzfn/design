import { marked } from "marked";
import xss from "xss";
import getMarkdownCode from "./utils/getMarkdownCode";
import fm from "front-matter";

function loader(rawContent: string) {
  const source = fm<{ [key: string]: any }>(rawContent);
  let code = getMarkdownCode(source.body);
  return code
    ? code
    : `
    import React from 'react';
const App = () => {
    return (
      <>
      ${xss(marked.parse(source.body, { xhtml: true }))
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
