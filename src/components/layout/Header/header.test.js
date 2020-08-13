import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';

import Header from '.';

describe('Component: Header', () => {
  it('should render without Finder', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with Finder and call onChange function', () => {
    const { container } = render(
      <MemoryRouter>
        <Header withFinder />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
