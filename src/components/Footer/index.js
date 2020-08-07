import React from 'react';

import { literals } from '../../utils/constants';

const {
  footer: { text, textLink, urlLink },
} = literals;

const Footer = () => (
  <footer>
    <div />
    <div className="container">
      <p>
        <a href={urlLink}>{textLink}</a>
        {text}
      </p>
    </div>
  </footer>
);

export default Footer;
