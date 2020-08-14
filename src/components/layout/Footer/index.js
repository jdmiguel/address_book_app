import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  literals,
  settingsIcon,
  homeIcon,
  warningIcon,
} from '../../../utils/constants';

/**
 * Displays the footer of the application
 * @component Footer
 * @param {boolean} withWarning - show / hide warning message depending on Finder is active
 * @param {boolean} withSettings - show either Settings link or Home link
 */

const {
  footer: {
    text,
    link: { settingsText, settingsLink, homeText, homeLink },
    warning,
  },
} = literals;

const Footer = ({ withWarning, withSettings }) => (
  <footer>
    {withWarning && (
      <div className="warning">
        <img src={warningIcon.src} alt={warningIcon.alt} />
        {warning}
      </div>
    )}
    <div className="container">
      <Link to={withSettings ? settingsLink : homeLink}>
        <img
          src={withSettings ? settingsIcon.src : homeIcon.src}
          alt={withSettings ? settingsIcon.alt : homeIcon.alt}
        />
        {withSettings ? settingsText : homeText}
      </Link>
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
