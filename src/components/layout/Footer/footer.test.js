import React from 'react';
import { render } from '@testing-library/react';

import Footer from '.';

describe('Component: Footer', () => {
  it('should render with home link', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with settings link', () => {
    const { container } = render(<Footer withSettings />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with home link and warning msg', () => {
    const { container } = render(<Footer withWarning />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with settings link and warning msg', () => {
    const { container } = render(<Footer withSettings withWarning />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
