import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';
import classes from '*.module.css';

const styles = {
  Palette: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  colors: {
    height: '88%',
  }
  
};

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val){
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(c => (
      <ColorBox 
        background={c[format]} 
        name={c.name} 
        key={c.id} 
        moreUrl={`/palette/${id}/${c.id}`}
        showingFullPalette />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar 
          changeLevel={this.changeLevel} 
          level={level}
          handleChange={this.changeFormat}
          showingAllColors />
        <div className={classes.colors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
