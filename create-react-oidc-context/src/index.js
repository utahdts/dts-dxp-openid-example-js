import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from "react-oidc-context";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const oidcConfig = {
  authority: "https://login.dts.utah.gov:443/sso/oauth2",
  client_id: "add_your_own",
  redirect_uri: "http://localhost:3000/callback",
  scope: "openid email"
};

root.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
