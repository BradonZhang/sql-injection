import React from 'react';
import './App.css';
import slides from './slides';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>
          SQL Injections
        </h1>
        <h3>
          What they are, why they happen, and how to prevent them
        </h3>
      </header> */}
      {slides.map((Slide, index) => <Slide key={index} />)}
    </div>
  );
}

export default App;
