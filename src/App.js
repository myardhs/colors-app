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
import NewPaletteForm from './NewPaletteForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {palettes: savedPalettes || seedColors};
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id === id;
    })
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] }, 
      this.syncLocalStorage 
    );

  }
  syncLocalStorage(){
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact 
            path='/palette/new' 
            render={(routeProps) => 
              <NewPaletteForm 
                savePalette={this.savePalette} 
                palettes={this.state.palettes}
                {...routeProps} 
              />
            } 
          />
          <Route exact
            path='/palette/:paletteId/:colorId'
            render={
              (routeProps) => <SingleColorPalette 
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} 
              />
            } 
          />
          <Route exact 
            path='/' 
            render={
              (routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />
            } 
          />
          <Route exact 
            path='/palette/:id' 
            render={
              (routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
            }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
