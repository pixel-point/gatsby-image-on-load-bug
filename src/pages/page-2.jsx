import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Link from 'components/shared/link';

const Page2 = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "test-4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `);
  const image2 = getImage(image);
  const [message1, setMessage1] = useState('on load failed');
  const [message2, setMessage2] = useState('on load failed');
  const [message3, setMessage3] = useState('on load failed');
  return (
    <div className="container mx-auto">
      <div>
        <Link to="/">Page 2</Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <StaticImage
            alt="Example static image"
            src="../images/test-1.png"
            onLoad={() => {
              setMessage1('on load triggered');
            }}
          />
        </div>
        <div>{new Date().toLocaleString()}</div>
        <div>{message1}</div>
        <div>
          <GatsbyImage
            image={image2}
            alt="Example static image"
            onLoad={() => {
              setMessage2('on load triggered');
            }}
            onStartLoad={({ wasCached }) => {
              console.log('on start load image 1', wasCached);
            }}
          />
        </div>
        <div>{new Date().toLocaleString()}</div>
        <div>{message2}</div>
        <div>
          <StaticImage
            alt="Example static image"
            src="../images/test-5.jpeg"
            onLoad={() => {
              setMessage3('on load triggered');
            }}
          />
        </div>
        <div>{new Date().toLocaleString()}</div>
        <div>{message3}</div>
      </div>
    </div>
  );
};

export default Page2;
