import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import './App.css';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
