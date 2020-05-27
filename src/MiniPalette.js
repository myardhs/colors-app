import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'blue',
    border: '3px solid yellow'
  },
  secondary: {
    backgroundColor: 'pink',
    '& h1': {
      color: 'white',
      "& span": {
        backgroundColor: 'yellow'
      }
    }
  }
};
function MiniPalette(props) {
  const {classes} = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>Each palette <span>with woom waam</span></h1>
        <span>Yoo Yamm Maoo</span>
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
