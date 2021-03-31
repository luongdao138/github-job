import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='dev-m3wm7ewh.us.auth0.com'
    clientId='VVlldirKdf9GLL0H7iSoYtPEgIad1iDX'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
