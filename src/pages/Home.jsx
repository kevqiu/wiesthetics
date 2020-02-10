import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import { Button, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { getAllSlots } from '../api/slots';

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
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h1>Hi people</h1>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('new-booking')}>
          Set up a booking
        </Button>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.Now go build something great.</p>
        <p>a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a .</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>Now go build something great.</p>
        <p>{text}</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Grid>

    </Layout>
  );
};

export default IndexPage;
