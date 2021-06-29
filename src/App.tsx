import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Play <code>with the</code> Counter.
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
