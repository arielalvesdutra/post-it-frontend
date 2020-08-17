import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import KeyboardShortcutInterceptor from './helpers/keyboard-shortcut-interceptor'
import store from './redux/store'

KeyboardShortcutInterceptor.captureShortcutEvents()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
