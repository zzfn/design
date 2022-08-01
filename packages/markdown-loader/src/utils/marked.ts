import { marked } from "marked";
import xss from "xss";

function mark2html(source: string) {
    return xss(marked.parse(source, { xhtml: true }))
}
export default mark2html
