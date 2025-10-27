import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-coqrqkrzm4vp4tjx.us.auth0.com"
    clientId="qnRbyK2e8f4zW2oOkUfhuWtUGdiIInwX"
    authorizationParams={{
      redirect_uri: "window.location.origin",
    }}
  >
    <App />
  </Auth0Provider>
);
