import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useMenu from "./useMenu";
import Moon from "./Moon";
import Sun from "./Sun";

const CommonLayout = () => {
  const list = useMenu();
  const [theme, setTheme] = useState("light");
  function setThemeAction(theme: string) {
    document.querySelector("html")?.setAttribute("data-color-mode", theme);
    setTheme(theme);
  }
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <ul>
          {list.map((item) => (
            <li>
              <Link key={item.path} to={item.path}>
                {item.path}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div style={{flexGrow:1}}>
        <header className={'web-header'}>
          组件库文档
          {theme === "dark" && (
            <Moon className={"icon"} onClick={() => setThemeAction("light")} />
          )}
          {theme === "light" && (
            <Sun className={"icon"} onClick={() => setThemeAction("dark")} />
          )}
        </header>
        <main className={'web-main'}>
          <Outlet />
        </main>
        <footer>power by cc</footer>
      </div>
    </div>
  );
};
export default CommonLayout;
