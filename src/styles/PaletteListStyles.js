import sizes from './sizes';
import bg from './bg.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 0.5s ease-out'
    }
  },
  root: {
    backgroundColor: '#EE5522',
    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${bg})`,
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'auto'
  },
  heading: {
    fontSize: '2rem',
    [sizes.down('xs')]: {
      fontSize: '1.3rem'
    }
  },
  container: {
    width: '70%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xs')]: {
      width: '70%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    justifyContent: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 21.25%)',
    gridGap: '5%',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(3, 30%)'
    },
    [sizes.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 45%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 90%)',
    }
  }
};