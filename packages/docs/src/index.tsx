import { createRoot } from 'react-dom/client';
import { App } from './App';
import 'highlight.js/styles/base16/railscasts.css';
import '../styles/global.scss'
const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(<App />);
