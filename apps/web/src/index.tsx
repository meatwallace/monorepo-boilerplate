import 'minireset.css';
import './styles.css';

import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { env } from './configs/env';

// if we're in development we want to mock our api endpoint
if (env.isDevelopment && !env.REACT_APP_DISABLE_MSW) {
  const { worker } = require('./mocks/browser');

  worker.start();
}

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
