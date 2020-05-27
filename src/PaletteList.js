import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>React Color</h1>
        {palettes.map(palette => (
          <Link to={`/palette/${palette.id}`}>
            <p>{palette.paletteName}</p>
          </Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
