const marked = require("marked");
function dangerouslySetInnerHTMLToJsx(html) {
    html = html.replace(/\n/g, '\\\n').replace(/"/g, "'");
    return `import React from 'react';
    export default function() {
      return (
        <div className="code-preview" dangerouslySetInnerHTML={{ __html: "<div>${html}</div>" }} />
      );
    };`;
}
function htmlToJsx(html,code) {
    // htmlToJsx(marked.parse(`\`\`\`js\n${output.js?.code}\n\`\`\``))
    return code?dangerouslySetInnerHTMLToJsx(code)
        :`
import React from 'react';
const App = () => {
    return (
      <>
      ${html
        .replace(/class=/g, 'className=')
        .replace(/{/g, '{"{"{')
        .replace(/}/g, '{"}"}')
        .replace(/{"{"{/g, '{"{"}')}
      </>
    );
};
export default App;
`;
}
module.exports = htmlToJsx;
