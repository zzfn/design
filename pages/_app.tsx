import '../styles/reset.css';
import '../dist/bundle.css';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import {Button} from "../components";

const menu = ['alert', 'button'];

function App({ Component, pageProps }: AppProps): JSX.Element {
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();

  function setTheme(theme) {
    document.querySelector('html').setAttribute('data-color-mode', theme);
  }

  const jump = (path: string) => () => {
    router.push(path);
  };
  useEffect(() => {
    setCurrentPath(router.pathname);
  });
  return (
    <>
      <header className={'header'}>
        <div>个人博客组件库</div>
        <div>
          <Button onClick={() => setTheme('light')}>浅色</Button>
          <Button onClick={() => setTheme('dark')}>深色</Button>
        </div>
      </header>
      <section className={'container'}>
        <ul className={'nav'}>
          {menu.map((item) => (
            <li
              className={classNames(currentPath.includes(item) && 'active', 'nav-item')}
              onClick={jump(item)}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <main className={'content'}>
          <Component {...pageProps} />
        </main>
      </section>
    </>
  );
}

export default App;