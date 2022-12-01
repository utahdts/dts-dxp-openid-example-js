import * as React from "react";
import * as ReactDOM from "react-dom";
import {AuthProvider, useAuth} from "react-oidc-context";

const oidcConfig = {
  authority: "https://login.dts.utah.gov:443/sso/oauth2",
  client_id: "add_your_own",
  redirect_uri: "http://localhost:1234/callback",
  scope: "openid email"
};

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        utahid/sub: {auth.user?.profile.sub}{" "}
        <br/>
        email: {auth.user?.profile.email}{" "}
        <br/>
        <button onClick={() => void auth.removeUser()}>
          Log out
        </button>
      </div>
    );
  }

  return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

ReactDOM.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>,
  document.getElementById("root"),
);