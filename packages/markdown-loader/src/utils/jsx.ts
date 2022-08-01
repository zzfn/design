export function htmlToJsx(html: string) {
    return `import React from 'react';

    export default function(props) {
      return (
        <span>${html
        .replace(/class=/g, 'className=')
        .replace(/{/g, '{"{"{')
        .replace(/}/g, '{"}"}')
        .replace(/{"{"{/g, '{"{"}')}</span>
      );
    };`;
}
