import React from 'react';
// import GitHubCard from './GitHubCard';
// import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import './App.css';

function App() {
  const GitHubCard = '';
  const logo = ['/src/NatalieProfilePicture.jpg'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={logo} alt='Portrait of Natalie sitting in a car.' />
        </h1>
        <h2>NatalieMae</h2>
        <p>
          Come and see all the shinnanigans I have gotten into in the last 6months!
        </p>
        <a
          className="App-link"
          href="https://github.com/NatalieMae"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </header>
    </div>
  );
}

export default App;
