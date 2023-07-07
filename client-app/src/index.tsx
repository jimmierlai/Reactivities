import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
=======
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
>>>>>>> 5592ca1dba5331dfd4905125d8f7d27f9af62526
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
ReactDOM.render(
    <App />,
  document.getElementById('root')
>>>>>>> 5592ca1dba5331dfd4905125d8f7d27f9af62526
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
