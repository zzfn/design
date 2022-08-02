import Prism from "prismjs";

function highlight(code) {
  return Prism.highlight(code, Prism.languages.tsx, "tsx");
}
export default highlight;
