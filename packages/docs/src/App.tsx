import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createElement } from "react";
import CommonLayout from "../components/CommonLayout";
import useMenu from "../components/useMenu";

function App(): JSX.Element {
  const list = useMenu();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<div>欢迎使用</div>} />
          {list.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={createElement(item.component)}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
