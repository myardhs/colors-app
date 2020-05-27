import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Link,
  Route } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <h1>palette list goes here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>palette</h1>} />
      </Switch>
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    </Router>
  );
}

export default App;
