import { App } from '@app-dtw/core/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

const rootEl = document.getElementById('root') as HTMLElement;
const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
