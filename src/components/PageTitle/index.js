import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ text }) => <h2>{text}</h2>;

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
