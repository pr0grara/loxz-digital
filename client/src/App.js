import D from './big_D.png';
import logo from './loxz_digital_logo.png';
import './App.css';
// import React, { useRef, useEffect } from "react";
import * as typeformEmbed from '@typeform/embed'

function App() {

  const reference = typeformEmbed.createPopup(
    // 'https://developerplatform.typeform.com/to/Xc7NMh',
    // 'https://loxz.typeform.com/to/xF6ZyWUR',
    'xF6ZyWUR',
    {
      mode: 'drawer_left',
      autoClose: 3000,
      hideHeaders: false,
      hideFooters: true,
    }
  )

  reference.open();

  // const embedElement = document.querySelector('#root');
  // console.log(embedElement)

  // typeformEmbed.createWidget(
  //   'xF6ZyWUR', // NOTE: Replace with your typeform URL
  //   {
  //     hideHeaders: true,
  //     hideFooter: true,
  //     opacity: 75,
  //     buttonText: "Take the survey!",
  //     onSubmit: function () {
  //       console.log('Typeform successfully submitted')
  //     }
  //   }
  // )
  // const typeformRef = useRef(null);

  // console.log(typeformEmbed)

  // typeformEmbed.createWidget("xF6ZyWUR", {
  //   hideHeaders: true,
  //   hideFooter: true,
  //   opacity: 75,
  //   buttonText: "Take the survey!",
  // });
  // document.addEventListener('DOMContentReady', () => {
  //   let popup = document.querySelector('.typeform-popup')
  //   debugger
  // })

  setTimeout(function () {
    reference.close()
  }, 10000) // NOTE: In this code, the typeform will automatically open, then automatically close 10 seconds later
  // // const typeform = typeformEmbed.

  return (
    <div className="App">
      <header className="App-header">
        <img src={D} className="App-logo" alt="logo" />
        <p>
          <code>&#60;survey&#62;</code>
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
    // <div className="empty"></div>
  );
}

export default App;
