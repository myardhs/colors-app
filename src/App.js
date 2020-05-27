import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import './App.css';

class App extends Component { 
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => <h1>palette list goes here</h1>} />
          <Route exact 
            path='/palette/:id' 
            render={
              (routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
            }
          />
        </Switch>
        {/* <div className="App">
          <Palette palette={generatePalette(seedColors[4])} />
        </div> */}
      </Router>
    );
  }
}

export default App;
