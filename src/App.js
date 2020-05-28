import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
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
          <Route exact
            path='/palette/:paletteId/:colorId'
            render={() => <SingleColorPalette />} 
          />
          <Route exact 
            path='/' 
            render={
              (routeProps) => <PaletteList palettes={seedColors} {...routeProps} />
            } 
          />
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
