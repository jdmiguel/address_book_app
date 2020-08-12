import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, withFinder, withSettings }) => (
  <div className="layout">
    <Header withFinder={withFinder} />
    <main>{children}</main>
    <Footer withSettings={withSettings} />
  </div>
);

Layout.propTypes = {
  withFinder: PropTypes.bool,
  withSettings: PropTypes.bool,
};

export default Layout;
