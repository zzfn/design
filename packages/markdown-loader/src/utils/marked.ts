import { marked } from "marked";
import hljs from 'highlight.js';
const renderer = new marked.Renderer();
renderer.code = function (code) {
    return `<pre class="code_block"><code class="language-tsx">${hljs.highlight(code, { language:'tsx' }).value}</code></pre>\n`
};
marked.setOptions({
  gfm: true,
  breaks: false,
  renderer,
  xhtml: true
});
export default marked;
