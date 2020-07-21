import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({ lang, meta, title }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    titleTemplate={`%s | winniexnails`}
    meta={[
      {
        name: `description`,
        content: 'Winnie Qiu | Nails and Esthetics',
      },
      {
        property: `og:title`,
        content: 'winniexnails',
      },
      {
        property: `og:description`,
        content: 'Winnie Qiu | Nails and Esthetics',
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ].concat(meta)}
  />
);

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
