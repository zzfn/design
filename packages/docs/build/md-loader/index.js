const parser = require("@babel/parser");
const htmlToJsx = require("./htmlToJsx");
const marked = require("marked");
const path = require("path");
const xss = require("xss");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
function parse(codeBlock) {
  return parser.parse(codeBlock, {
    sourceType: "module",
    plugins: ["jsx", "classProperties"],
  });
}

module.exports = function (source, options) {
  marked.use({ xhtml: true });
  const codeRegex = /^(([ \t]*`{3,4})([^\n]*)([\s\S]+?)(^[ \t]*\2))/gm;
  let matches;
  const output = {};
  while ((matches = codeRegex.exec(source))) {
    const lang = matches[3];
    const code = matches[4];
    if (["tsx"].indexOf(lang) > -1) {
      const l = ["tsx"].indexOf(lang) > -1 ? "js" : "css";
      output[l] = {
        lang,
        code,
        origin: matches[0],
      };
    }
  }
  return htmlToJsx(xss(marked.parse(source)), output.js?.code);
};
