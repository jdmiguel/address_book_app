import React from 'react';
import { render } from '@testing-library/react';

import PageTitle from '.';

describe('Component: PageTitle', () => {
  it('should render', () => {
    const { container } = render(<PageTitle text="Default page title" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
