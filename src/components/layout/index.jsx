import React, { useState } from 'react';
import { navigate } from 'gatsby';
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
import Button from '@material-ui/core/Button';
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
        <AppBar style={{ background: 'white', boxShadow: 'none'}}>
          <Toolbar>
            <Typography variant="h2" className={styles.title} onClick={() => navigate('/')}>
              WINNIExNAILS
            </Typography>
            <Button color="inherit" onClick={() => navigate('services')}>Services</Button>
            <Button color="inherit" onClick={() => navigate('gallery')}>Gallery</Button>
            <Button color="inherit" onClick={() => navigate('contact')}>Contact</Button>
            <Button color="inherit" variant="outlined" style={{marginLeft: '1rem'}} onClick={() => navigate('new-booking')}>BOOK NOW</Button>
          </Toolbar>
        </AppBar>

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
