import { makeStyles } from '@material-ui/core/styles';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: `56px 0rem`,
    backgroundColor: 'white',
    maxWidth: '100%',
    overflowX: 'hidden',
  },
  menuButton: {
    position: 'absolute',
  },
  title: {
    flexGrow: 1,
    color: 'black',
    cursor: 'pointer'
  },
}));

export default classes;
