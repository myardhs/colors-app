import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div style={{background: this.props.background }} className="ColorBox">
        <span>More</span>
      </div>
    );
  }
}

export default ColorBox;
