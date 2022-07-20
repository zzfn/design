import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

const Playground = (props: any) => {
  const { code, scope } = props;
  function transformCode(code: string) {
    if (code.startsWith('()') || code.startsWith('class')) return code;
    return `<React.Fragment>${code}</React.Fragment>`;
  }

  return (
    <div className={'live-editor'}>
      <LiveProvider scope={scope} language='jsx' code={code}>
        <LiveError/>
        <LivePreview className={'preview'} />
        <LiveEditor className={'code'} />
      </LiveProvider>
    </div>
  );
};
export default Playground;
