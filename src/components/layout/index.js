import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, withFinder, withSettings, withWarning }) => (
  <div className="layout">
    <Header withFinder={withFinder} />
    <main>{children}</main>
    <Footer withSettings={withSettings} withWarning={withWarning} />
  </div>
);

Layout.propTypes = {
  withFinder: PropTypes.bool,
  withSettings: PropTypes.bool,
  withWarning: PropTypes.bool,
};

export default Layout;
