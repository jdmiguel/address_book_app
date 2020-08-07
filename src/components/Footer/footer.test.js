import React from 'react';
import { render } from '@testing-library/react';

import Footer from '.';

describe('Component: Footer', () => {
  it('should render', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
