import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p>{"This page doesn't exist :("}</p>
    <Link to="/">Back to home </Link>
  </Layout>
);

export default NotFoundPage;
