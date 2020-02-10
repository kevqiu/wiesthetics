import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import { getAllRequest } from '../api/client';

import './styles.css';

const IndexPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllRequest('slots');
      const data = await response.json();
      setText(JSON.stringify(data));
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>{text}</p>
      <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel mauris congue nisi egestas hendrerit. Fusce congue mattis dui id pretium. Sed ut aliquam leo, a consequat tortor. Donec convallis, tellus mollis elementum finibus, dolor dui consequat nibh, nec posuere mi lacus at lectus. Pellentesque et vulputate nisl, in facilisis diam. Aliquam tristique lectus sed vestibulum vehicula. Nunc ac lorem eu velit interdum consectetur a vitae eros. In porta ex sit amet velit elementum molestie. Morbi porttitor eros ex, a placerat justo rutrum eget. Nulla condimentum ut tortor eget sagittis. Etiam condimentum nisi eu lacus commodo, vitae porta tellus sodales. Aenean est neque, rhoncus sit amet aliquam vel, suscipit vestibulum nisl.

Curabitur elementum velit sit amet tincidunt laoreet. Vivamus maximus sodales magna, eu dapibus massa egestas ac. Aenean vel justo tortor. Nunc vitae vestibulum ligula. Fusce varius lacus felis, a condimentum nisl dapibus id. Aliquam erat volutpat. Phasellus venenatis nulla vel risus ornare, eget efficitur dui facilisis. Donec quis felis id dolor suscipit viverra. Sed rutrum velit vel dolor euismod hendrerit. Mauris a risus sit amet erat porttitor blandit. Duis eget turpis vitae enim ultrices pellentesque ut sit amet sapien. In posuere pulvinar nibh eu auctor.

Aenean vel dictum ex, eu luctus nibh. Suspendisse auctor laoreet lacus ac ullamcorper. Duis non odio eu leo bibendum ullamcorper. Nullam porta, quam sed facilisis congue, nulla metus rhoncus nunc, nec congue erat nibh ac ex. Aliquam at mi et odio blandit dictum. Morbi non quam hendrerit, consequat purus at, ultricies odio. Proin blandit facilisis nisl sed dictum. Aliquam erat volutpat. Cras efficitur ullamcorper lectus ac dapibus.

Vivamus est dolor, tincidunt in fermentum id, condimentum ut quam. Ut vel blandit tellus, in finibus lacus. Aliquam vel posuere libero. Maecenas maximus, quam in ullamcorper fermentum, libero magna fringilla nunc, vel laoreet nunc risus at urna. Nullam varius purus sit amet orci viverra, vel pharetra lorem tristique. Nunc malesuada mi sagittis facilisis posuere. Curabitur vestibulum sed enim malesuada semper. Maecenas sodales faucibus justo, sed lacinia libero hendrerit sit amet. Phasellus aliquet posuere fermentum. Maecenas eleifend fermentum erat id aliquet. Proin id nulla sed nisi luctus placerat quis et libero. Suspendisse tempor erat ut nisi porta, eu pulvinar nulla blandit. Pellentesque ut condimentum elit. Sed ac ipsum sapien.

Pellentesque laoreet eros in consectetur malesuada. Duis scelerisque leo sit amet neque faucibus tristique. Etiam vitae auctor mi, sit amet ultricies risus. Sed ac posuere ligula. Etiam vestibulum justo sit amet ornare ultricies. Nunc nec ligula metus. Vestibulum at tincidunt est. Nunc nisi sapien, maximus et tincidunt a, tempus facilisis justo. Praesent vitae quam eget velit porta dignissim eu et diam.`}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
