import logo from './logo.svg';
import './App.css';
import {useAuth} from "react-oidc-context";

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          utahid/sub: {auth.user?.profile.sub}{" "}
          <br/>
          email: {auth.user?.profile.email}{" "}
          <br/>
          <button onClick={() => void auth.removeUser()}>
            Log out
          </button>
        </header>
      </div>
    );
  }

  return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default App;
