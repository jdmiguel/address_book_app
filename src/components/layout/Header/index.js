import React from 'react';
import PropTypes from 'prop-types';

import Finder from '../../core/Finder';

import { literals } from '../../../utils/constants';

const Header = ({ withFinder }) => (
  <header className={!withFinder ? 'basic' : ''}>
    <div className="container">
      <h1>{literals.title}</h1>
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
