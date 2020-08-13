import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  withFinder,
  withSettings,
  withWarning,
  onChangeFinder,
  isSearching,
  isMatched,
}) => (
  <div className="layout">
    <Header
      withFinder={withFinder}
      onChangeFinder={onChangeFinder}
      isSearching={isSearching}
      isMatched={isMatched}
    />
    <main>{children}</main>
    <Footer withSettings={withSettings} withWarning={withWarning} />
  </div>
);

Layout.propTypes = {
  withFinder: PropTypes.bool,
  withSettings: PropTypes.bool,
  withWarning: PropTypes.bool,
  onChangeFinder: PropTypes.func,
  isSearching: PropTypes.bool,
  isMatched: PropTypes.bool,
};

Layout.defaultProps = {
  withFinder: false,
  withSettings: false,
  withWarning: false,
  isSearching: false,
  isMatched: false,
};

export default Layout;
