import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Finder from '../../core/Finder';

import { literals } from '../../../utils/constants';

const Header = ({ withFinder }) => (
  <header className={!withFinder ? 'basic' : ''}>
    <div className="container">
      <Link to="/">
        <h1>{literals.logo}</h1>
      </Link>
      {withFinder && <Finder onChange={(value) => console.log(value)} />}
    </div>
    <div />
  </header>
);

Header.propTypes = {
  withFinder: PropTypes.bool,
};

Header.defaultProps = {
  withFinder: false,
};

export default Header;
