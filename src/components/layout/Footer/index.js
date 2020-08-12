import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  literals,
  settingsIcon,
  homeIcon,
  warningIcon,
} from '../../../utils/constants';

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
        <img src={warningIcon} alt="icon" />
        {warning}
      </div>
    )}
    <div className="container">
      <Link to={withSettings ? settingsLink : homeLink}>
        <img src={withSettings ? settingsIcon : homeIcon} alt="icon" />
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