import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('Component: App', () => {
  it('should render', () => {
    const { container } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
