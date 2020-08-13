import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Finder from '../../core/Finder';

import { literals } from '../../../utils/constants';

const Header = ({
  withFinder,
  isTranslated,
  onChangeFinder,
  isSearching,
  isMatched,
}) => (
  <header
    className={`${!withFinder ? 'basic' : ''}${isTranslated ? 'up' : ''}`}
  >
    <div className="container">
      <Link to="/">
        <h1>{literals.logo}</h1>
      </Link>
      {withFinder && (
        <Finder
          onChange={onChangeFinder}
          isSearching={isSearching}
          isMatched={isMatched}
        />
      )}
    </div>
  </header>
);

Header.propTypes = {
  withFinder: PropTypes.bool,
  isTranslated: PropTypes.bool,
  onChangeFinder: PropTypes.func,
  isSearching: PropTypes.bool,
  isMatched: PropTypes.bool,
};

export default Header;
