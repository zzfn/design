import { marked } from "marked";
import highlight from './highlight';
import { compileReact } from '../compiler/react';

const renderer = new marked.Renderer();

renderer.code = function (code, infostring, escaped) {
  const lang = (infostring || '').match(/\S*/)[0];

  if (lang === 'js:react') {
    return compileReact(code).holder;
  }

  if (this.options.highlight) {
    const out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return `<pre><code>${escaped ? code : escape(code)}</code></pre>`;
  }

  return `<pre class="code_block"><code class="${this.options.langPrefix}${escape(lang)}">${
    escaped ? code : escape(code)
  }</code></pre>\n`;
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
  xhtml: true,
  highlight(code, lang) {
    if (lang === 'js' || lang === 'javascript') {
      lang = 'jsx';
    }

    return highlight(code, lang).replace(/^\n/, '').replace(/\n/g, '<br />');
  },
});

// sort table api
const walkTokens = (token) => {
  if (token.type === 'table') {
    token.rows.sort((a, b) => a[0].text.localeCompare(b[0].text));
  }
};

marked.use({ walkTokens });

export default marked;
