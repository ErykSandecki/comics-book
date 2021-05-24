import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/App/App';
import Firebase from './components/Firebase/Firebase';

// styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Firebase />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
