import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a title
 * @component PageTitle
 * @param {string} text -  text to show
 */

const PageTitle = ({ text }) => <h2>{text}</h2>;

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
