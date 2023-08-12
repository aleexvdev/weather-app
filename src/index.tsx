import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Open+Sans&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</React.StrictMode>
);

