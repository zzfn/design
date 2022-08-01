import unified from "unified";
import remarkParse from "remark-parse";

const getMarkdownCode = (source: string) => {
  const ast = unified().use(remarkParse).freeze().parse(source);
  let code = "";
  if (Array.isArray(ast.children)) {
    ast.children.forEach((child) => {
      const { type, value } = child;
      if (type === "code") {
        code = value;
      }
    });
  }
  return code;
};
export default getMarkdownCode;
