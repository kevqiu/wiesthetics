import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';

import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { getAllSlots } from '../api/slots';

import ImageGridList from '../components/ImageGridList';


const useStyles = makeStyles(theme => ({
  back: {
    background: 'rgb(220, 220, 220)',
    padding: '0 10px',
  }
}));

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

  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{paddingTop: 50}}
      >
        <Grid item style={{paddingBottom: 30}}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('new-booking')}>
            Set up a booking
          </Button>
        </Grid>
        
        <Grid item container spacing={3} className={classes.back}>
          <Grid item xs={12} lg={6}>
            <h1>
              About me!
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of 
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ImageGridList />
          </Grid>
        </Grid>
        <div style={{paddingTop: 30}}>
          <IconButton href="https://www.instagram.com/winniexnails/">
            <InstagramIcon fontSize="large"/>
          </IconButton>
        </div>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
