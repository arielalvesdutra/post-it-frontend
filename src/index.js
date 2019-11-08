import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import KeyboardShortcutInterptor from './interceptors/keyboard-shortcut-interceptor'
import store from './redux/store'

KeyboardShortcutInterptor.caputureShortcutEvents()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
