import { DRAWER_WIDTH } from '../constant';
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: '10px'
  },
  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    }
  },
  button: {
    width: 'auto !important',
    margin: '0 0.5rem'
  }
});

export default styles;