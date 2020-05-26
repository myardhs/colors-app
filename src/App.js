import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import './App.css';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors} />
    </div>
  );
}

export default App;
