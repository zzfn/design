// @ts-ignore
import { parse } from '@babel/parser';

function babelParse(codeBlock) {
    return parse(codeBlock, {
        sourceType: 'module',
        plugins: ['jsx', 'classProperties'],
    });
}
export default babelParse
