import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';

import Footer from '.';

describe('Component: Footer', () => {
  it('should render with home link', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with settings link', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer withSettings />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with home link and warning msg', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer withWarning />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with settings link and warning msg', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer withSettings withWarning />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
