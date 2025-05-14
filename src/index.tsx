import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@app-dtw/core/App';
import { store } from '@app-dtw/core/store';

import 'bootstrap/dist/css/bootstrap.css';

const rootEl = document.getElementById('root') as HTMLElement;
const root = createRoot(rootEl);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
