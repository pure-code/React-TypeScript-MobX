import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './helpers/normalize.css';
import './helpers/base.css';
import {Provider} from "./hooks/use-store";
import stores from "./stores";

ReactDOM.render(
  <Provider value={stores}>
    <App />
  </Provider>
  , document.getElementById('root'));
