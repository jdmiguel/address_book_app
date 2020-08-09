import React from 'react';
import PropTypes from 'prop-types';

import { literals, settingsIcon, homeIcon } from '../../utils/constants';

const {
  footer: {
    text,
    link: { settingsText, settingsLink, homeText, homeLink },
  },
} = literals;

const Footer = ({ withSettings }) => (
  <footer>
    <div />
    <div className="container">
      <a href={withSettings ? settingsLink : homeLink}>
        <img src={withSettings ? settingsIcon : homeIcon} alt="icon" />
        {withSettings ? settingsText : homeText}
      </a>
      {text}
    </div>
  </footer>
);

Footer.propTypes = {
  withSettings: PropTypes.bool,
};

Footer.defaultProps = {
  withSettings: false,
};

export default Footer;
