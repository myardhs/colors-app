import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
  const { paletteName, emoji} = props;
  return (
    <footer className='Palette-footer'>
      {paletteName}
      <span className='emoji'>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);