import React from 'react';
import PropTypes from 'prop-types';

import { literals, settingsIcon, homeIcon } from '../../utils/constants';

const {
  footer: {
    text,
    link: { settingsText, settingsLink, homeText, homeLink },
    warning,
  },
} = literals;

const Footer = ({ withWarning, withSettings }) => (
  <footer className={withWarning ? 'withWarning' : ''}>
    <div>{withWarning && warning}</div>
    <div className="container">
      <a href={withSettings ? settingsLink : homeLink}>
        <img
          src={withSettings ? String(settingsIcon) : String(homeIcon)}
          alt="icon"
        />
        {withSettings ? settingsText : homeText}
      </a>
      {text}
    </div>
  </footer>
);

Footer.propTypes = {
  withWarning: PropTypes.bool,
  withSettings: PropTypes.bool,
};

Footer.defaultProps = {
  withWarning: false,
  withSettings: false,
};

export default Footer;
