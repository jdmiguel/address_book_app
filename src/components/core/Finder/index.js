import React from 'react';
import PropTypes from 'prop-types';

import { literals, searchingIcon, checkIcon } from '../../../utils/constants';

/**
 * Displays a input with an specific search from user
 * @component Finder
 * @param {function} onChange - executed callback when new characters are added in the input
 * @param {boolean} isSearching - show / hide search icon
 * @param {boolean} isMatched - show / hide match icon
 */

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
