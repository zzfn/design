import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useMenu from "./useMenu";
import Moon from "./Moon";
import Sun from "./Sun";
import styles from "./layout.module.scss";
import { Layout } from "@zzf/design";
const CommonLayout = () => {
  const list = useMenu();
  const [theme, setTheme] = useState("light");
  function setThemeAction(theme: string) {
    document.querySelector("html")?.setAttribute("data-color-mode", theme);
    setTheme(theme);
  }
  return (
    <Layout className={styles.container}>
      <Layout.Header>
        <header className={styles.webHeader}>
          组件库文档
          {theme === "dark" && (
            <Moon className={"icon"} onClick={() => setThemeAction("light")} />
          )}
          {theme === "light" && (
            <Sun className={"icon"} onClick={() => setThemeAction("dark")} />
          )}
        </header>
      </Layout.Header>
      <Layout.Content className={styles.webContent}>
        <Layout.Left>
          <ul>
            {list.map((item) => (
              <li key={item.path}>
                <Link key={item.path} to={item.path}>
                  {item.path}
                </Link>
              </li>
            ))}
          </ul>
        </Layout.Left>
        <Layout.Center>
          <Outlet />
        </Layout.Center>
      </Layout.Content>
      <Layout.Footer className="container">power by cc</Layout.Footer>
    </Layout>
  );
};
export default CommonLayout;
