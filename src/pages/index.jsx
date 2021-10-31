import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Link from 'components/shared/link';
import ExampleInlineSVG from 'images/example.inline.svg';
import exampleUrlSvg from 'images/example.svg';
import MainLayout from 'layouts/main';

const IndexPage = () => {
  const [message1, setMessage1] = useState('on load failed');
  const [message2, setMessage2] = useState('on load failed');
  const [message3, setMessage3] = useState('on load failed');
  return (
    <div className="container mx-auto">
      <div>
        <Link to="/page-2">Page 2</Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <StaticImage
            alt="Example static image"
            src="../images/gatsby-astronaut.png"
            onLoad={() => setMessage1('on load triggered')}
          />
        </div>
        <div>{new Date().toLocaleString()}</div>
        <div>{message1}</div>
        <div>
          <StaticImage
            alt="Example static image"
            src="../images/test-2.png"
            onLoad={() => setMessage2('on load triggered')}
          />
        </div>
        <div>{new Date().toLocaleString()}</div>
        <div>{message2}</div>
        <div>
          <StaticImage
            alt="Example static image"
            src="../images/test-3.jpeg"
            onLoad={() => setMessage3('on load triggered')}
          />
        </div>
        <div>{new Date().toLocaleString()}</div>
        <div>{message3}</div>
      </div>
    </div>
  );
};

export default IndexPage;
