import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

describe('Component: Header', () => {
  it('should render without Finder', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
