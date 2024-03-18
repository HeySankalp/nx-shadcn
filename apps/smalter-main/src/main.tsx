import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import "../../../ui-components/src/lib/styles/global.css"

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);