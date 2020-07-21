import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import { Button, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { getAllSlots } from '../api/slots';

import ImageGridList from '../components/ImageGridList'

import MyCarousel from '../components/carousel'

const IndexPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllSlots();
      const data = await response.json();
      setText(JSON.stringify(data));
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h1></h1>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <MyCarousel />          
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('new-booking')}>
            Set up a booking
          </Button> 
        </Grid>
        <Grid item xs={12}>
          <p>Home</p>          
        </Grid>
      </Grid>

    </Layout>
  );
};

export default IndexPage;
