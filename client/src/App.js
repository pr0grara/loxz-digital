import D from './big_D.png';
import logo from './logo.png';
import './App.css';
import * as typeformEmbed from '@typeform/embed'

function App() {

  const reference = typeformEmbed.createPopup(
    'https://tscheotnwcv.typeform.com/to/xF6ZyWUR',
    {
      mode: 'popup',
      autoClose: 3000,
      hideHeaders: false,
      hideFooters: true,
    }
  )

  reference.open();

  // setTimeout(function () {
  //   reference.close()
  // }, 10000) // NOTE: In this code, the typeform will automatically open, then automatically close 10 seconds later
  // // const typeform = typeformEmbed.

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
