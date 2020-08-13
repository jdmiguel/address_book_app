import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  withFinder,
  translateHeader,
  withSettings,
  withWarning,
  onChangeFinder,
  isSearching,
  isMatched,
}) => (
  <div className="layout">
    <Header
      isTranslated={translateHeader}
      withFinder={withFinder}
      onChangeFinder={onChangeFinder}
      isSearching={isSearching}
      isMatched={isMatched}
    />
    <main className={`${!withFinder ? 'basic' : ''}`}>{children}</main>
    <Footer withSettings={withSettings} withWarning={withWarning} />
  </div>
);

Layout.propTypes = {
  withFinder: PropTypes.bool,
  translateHeader: PropTypes.bool,
  withSettings: PropTypes.bool,
  withWarning: PropTypes.bool,
  onChangeFinder: PropTypes.func,
  isSearching: PropTypes.bool,
  isMatched: PropTypes.bool,
};

Layout.defaultProps = {
  withFinder: false,
  translateHeader: false,
  withSettings: false,
  withWarning: false,
  isSearching: false,
  isMatched: false,
};

export default Layout;
