import React from 'react';
import PropTypes from 'prop-types';

import { literals, searchingIcon, checkIcon } from '../../../utils/constants';

const Finder = ({ onChange, isSearching, isMatched }) => (
  <div className="finder">
    <input
      placeholder={literals.finderPlaceholder}
      onChange={(event) => onChange(event.target.value)}
      autoComplete="nope"
    />
    {isSearching && <img src={searchingIcon} alt="icon" />}
    {isMatched && <img src={checkIcon} alt="icon" />}
  </div>
);

Finder.propTypes = {
  onChange: PropTypes.func.isRequired,
  isSearching: PropTypes.bool,
  isMatched: PropTypes.bool,
};

Finder.defaultProps = {
  isSearching: false,
  isMatched: false,
};

export default Finder;
