import docgen from "react-docgen-typescript";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const parse = docgen.withDefaultConfig({
  propFilter: (prop) => {
    if (prop.parent == null) {
      return true;
    }
    return prop.parent.fileName.indexOf("node_modules/@types/react") < 0;
  },
}).parse;

const files = await fs.readdir(path.resolve(__dirname, "../../ui/components"));
files.forEach(async (file) => {
  try {
    const componentInfo = parse(
        path.resolve(__dirname, `../../ui/components/${file}/${file}.tsx`)
    );
    const has = await fs.stat(path.resolve(__dirname, `../src/${file}`));
    if (!has) {
      await fs.mkdir(path.resolve(__dirname, `../src/${file}`));
    }
    await fs.writeFile(
        path.resolve(__dirname, `../src/${file}/types.md`),
        commentToMarkDown(componentInfo)
    );
  } catch (e) {
    console.log(e)
  }
});

function commentToMarkDown(componentInfo) {
  return componentInfo
    .map((item) => {
      let { props } = item;
      return renderMarkDown(props);
    })
    .join("\n");
}
function renderMarkDown(props) {
  return `## 参数 Props
  | 属性 |  类型 | 默认值 | 必填 | 描述 |
  | --- | --- | --- | --- | ---|
  ${Object.keys(props)
    .map((key) => renderProp(key, props[key]))
    .join("")}
  `;
}
function renderProp(
  name,
  { type = { name: "-" }, defaultValue = { value: "-" }, required, description }
) {
  return `| ${name} | ${getType(type)} | ${defaultValue?.value.replace(
    /\|/g,
    "<span>|</span>"
  )} | ${required ? "✓" : "✗"} |  ${description || "-"} |
  `;
}
function getType(type) {
  const handler = {
    enum: (type) =>
      type.value.map((item) => item.value.replace(/'/g, "")).join(" \\| "),
    union: (type) => type.value.map((item) => item.name).join(" \\| "),
  };
  if (typeof handler[type.name] === "function") {
    return handler[type.name](type).replace(/\|/g, "");
  } else {
    return type.name.replace(/\|/g, "");
  }
}
