import { createRoot } from 'react-dom/client';
import { App } from './App';
import '../styles/global.scss'
const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(<App />);
