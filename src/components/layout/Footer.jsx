import React from 'react'
import Grid from '@material-ui/core/Grid'
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

const Footer = () => {
  return (
    <Grid container spacing={2} direction="row" justify="center" alignItems="center">
      <div style={{ 
        color: 'black',
        background: 'transparent',
        paddingTop: '3em',
        position: 'relative',
        bottom: '0',
        width: '80%'}}
      >
        <Grid container item justify="center" alignItems="center">
          <IconButton href="https://www.instagram.com/winniexnails/">
            <InstagramIcon fontSize="large"/>
          </IconButton>
        </Grid>
        {/* <hr /> */}
        <Grid container item justify="center" alignItems="center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} winniexnails | 
            All rights reserved |
            Terms Of Service | 
            Privacy
          </p>
        </Grid>
      </div>  
    </Grid>
    
  )
}

export default Footer