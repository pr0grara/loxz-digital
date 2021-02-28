import D from './big_D.png';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={D} className="App-logo" alt="logo" />
        <p>
          <code>&#60;survey coming soon&#62;</code>
          <a
            className="logo-link"
            href="http://loxz.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </p>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
