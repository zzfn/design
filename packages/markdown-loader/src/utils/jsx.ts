export function htmlToJsx(html: string) {
  return `import React from 'react';

    export default function(props) {
      return (
        <span>${html
          .replace(/class=/g, "className=")
          .replace(/{/g, '{"{"{')
          .replace(/}/g, '{"}"}')
          .replace(/{"{"{/g, '{"{"}')}</span>
      );
    };`;
}
export function dangerouslySetInnerHTMLToJsx(html: string) {
  html = html.replace(/\n/g, "<br/>").replace(/"/g, "'");
  return `import React from 'react';
    export default function() {
      return (
        <div className="code-preview" dangerouslySetInnerHTML={{ __html: "<div>${html}</div>" }} />
      );
    };`;
}
