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
    {isSearching && <img src={searchingIcon.src} alt={searchingIcon.alt} />}
    {isMatched && <img src={checkIcon.src} alt={checkIcon.alt} />}
  </div>
);

Finder.propTypes = {
  onChange: PropTypes.func,
  isSearching: PropTypes.bool,
  isMatched: PropTypes.bool,
};

Finder.defaultProps = {
  isSearching: false,
  isMatched: false,
};

export default Finder;
