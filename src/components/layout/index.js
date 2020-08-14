import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

/**
 * Displays the layout of the application by including header, footer and main content
 * @component Layout
 * @param {ReactNode} children - the main content
 * @param {boolean} withFinder - set header withFinder prop as true or false and set main
 * as basic or not what implicates different styles
 * @param {boolean} translateHeader - set header translateHeader prop as true or false
 * @param {boolean} withSettings - set footer withSettings prop as true or false
 * @param {boolean} withWarning - set footer withWarning prop as true or false
 * @param {function} onChangeFinder - propagated callback when Finder has changed
 * @param {boolean} isSearching - set header isSearching prop as true or false
 * @param {boolean} isMatched - set header isMatched prop as true or false
 */

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
