import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './redux/store';
import { DogComponent } from './interview/DogComponent';
import { CountAPI } from './interview/CountAPI';
import { UseCallbackDemo } from './components/hooks/UseCallbackDemo';
import { UseMemoDemo } from './components/hooks/UseMemoDemo';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    {/* <CountAPI /> */}
    {/* <UseCallbackDemo /> */}
    <UseMemoDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
