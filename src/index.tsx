import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// components
import App from './components/App/App';
import Firebase from './components/Firebase/Firebase';

// store
import configureStore from './store/configureStore';

// styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Firebase />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
