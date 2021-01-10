import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import classes from './classes';
import Footer from './Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ce93d8',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Georgia',
    h1: {
      fontSize: '7rem',
      '@media (max-width:1550px)': {
        fontSize: '5rem',
      },
      '@media (max-width:1100px)': {
        fontSize: '4rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.4rem',
      },
    },
    h2: {
      fontSize: '4rem',
      '@media (max-width:1550px)': {
        fontSize: '3rem',
      },
      '@media (max-width:1100px)': {
        fontSize: '2rem',
      },
    }
  }
});

const Layout = (props) => {
  const styles = classes();
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Slide appear={false} direction="down" in={!useScrollTrigger()}>
          <AppBar style={{ background: 'white', boxShadow: 'none'}}>
            <Toolbar>
              <IconButton
                edge="start"
                className={styles.menuButton}
                color="black"
                aria-label="menu"
                onClick={() => setDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={styles.title}>
                winniexnails
            </Typography>
            </Toolbar>
          </AppBar>
        </Slide>
        <SwipeableDrawer
          open={drawer}
          onClose={() => setDrawer(false)}
          onOpen={() => setDrawer(true)}
        >
          <List>
            <ListItem>
              <p>asd</p>
            </ListItem>
            <ListItem>
              <p>zxc</p>
            </ListItem>
          </List>
        </SwipeableDrawer>

        <div className={styles.root}>
          <main>{props.children}</main>
          <Footer/>
        </div>

      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
