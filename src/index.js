import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { Provider } from 'react-redux';
import store from './redux/store/index';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './utils/web3React';

ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Web3ReactProvider>
  </Provider>,
  document.getElementById('root')
);