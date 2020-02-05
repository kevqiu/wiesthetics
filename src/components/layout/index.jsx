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

import classes from './classes';

const Layout = (props) => {
  const styles = classes();
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!useScrollTrigger()}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={styles.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              wi.esthetics
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{props.children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
