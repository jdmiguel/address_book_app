import React from 'react';

import { literals } from '../../utils/constants';

const Header = () => (
  <header>
    <div className="container">
      <h1>{literals.title}</h1>
    </div>
  </header>
);

export default Header;
