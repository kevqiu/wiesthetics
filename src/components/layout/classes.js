import { makeStyles } from '@material-ui/core/styles';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: `56px 1.0875rem`,
  },
  menuButton: {
    position: 'absolute',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white'
  },
}));

export default classes;
