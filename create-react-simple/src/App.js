import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Secure from './src/Secure/Secure';
import Public from './src/Public/Public';

function App() {
  // https://www.sitepoint.com/get-url-parameters-with-javascript/
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const page = urlParams.get('page')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {page === 'secure' ? <Secure /> : undefined}
        {page !== 'secure' ? <Public /> : undefined}
        <p>
          Edit <code>src/App.js</code> and save to reload!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
