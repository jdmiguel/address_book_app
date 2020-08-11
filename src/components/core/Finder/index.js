import React from 'react';
import PropTypes from 'prop-types';

import { literals } from '../../../utils/constants';

const {
  finder: { enabledText, disabledText },
} = literals;

const Finder = ({ onChange, disabled }) => (
  <input
    className={disabled ? 'disabled' : ''}
    placeholder={disabled ? disabledText : enabledText}
    onChange={(event) => onChange(event.target.value)}
    disabled={disabled}
    autoComplete="nope"
  />
);

Finder.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Finder.defaultProps = {
  disabled: false,
};

export default Finder;
