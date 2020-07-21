import React from 'react';
import { Link } from 'gatsby';
import { TextField, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';

const NewBookingPage = () => {
  return (
    <Layout>
      <SEO title="Creating a New Booking" />
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2}/>
          <Grid item xs={12} sm={8} >
            <Content />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2}/>
      </Grid>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
};

export default NewBookingPage

          {/* <TextField required id="outlined-name" label="Name" variant="outlined" color="primary"/>
          <TextField required id="outlined-number" label="Phone Number" type="number" variant="outlined" color="primary"/>
          <TextField required id="outlined-email" label="Email" variant="outlined" color="primary"/>
          <TextField required id="outlined-ig" label="Instagram" variant="outlined" color="primary"/> */}
