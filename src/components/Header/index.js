import React from 'react';
import PropTypes from 'prop-types';

import { literals } from '../../utils/constants';

const Header = ({ withFinder }) => (
  <header className={!withFinder ? 'basic' : ''}>
    <div className="container">
      <h1>{literals.title}</h1>
    </div>
  </header>
);

Header.propTypes = {
  withFinder: PropTypes.bool,
};

export default Header;
