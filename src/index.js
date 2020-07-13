import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configStore from './redux/Config';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './app.css'

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
