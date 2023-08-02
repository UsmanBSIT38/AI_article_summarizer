import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./services/store";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain="dev-5ftdm2hxhitm6wtp.us.auth0.com"
  clientId="LGhFsO2sAVaOAYsdciLcypliGt70pBoi"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>
 
);
