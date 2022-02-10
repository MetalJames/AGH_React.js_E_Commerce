import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = -10;

export default makeStyles((theme) => ({
  appBar: {
    bottom: '0',
    left: 'auto',
    right: '0',
    position: 'fixed',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    height: '56px',
    width: '100vw',
    boxShadow: 'none',
    background: '#000000',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: '#fff',
    justifyContent: 'center'
  },
}));