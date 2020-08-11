import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Header withFinder />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
