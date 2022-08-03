import { useEffect, useState } from "react";

const useMenu = () => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    const files = require.context("../src/", true, /demo.zh-CN.md$/);
    const components = files
      .keys()
      .map((item) => {
        console.log(item)
        return {
          path: item.replace("./", "").replace("/demo.zh-CN.md", ""),
          component: files(item).default,
        };
      })
      .filter((item) => item.path);
    setList(components);
  }, []);
  return list;
};
export default useMenu;
