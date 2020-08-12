import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Finder from '.';

describe('Component: Finder', () => {
  it('should render and call onChange function', () => {
    const handleChange = jest.fn();
    const { container } = render(<Finder onChange={handleChange} />);

    expect(container.firstChild).toMatchSnapshot();

    fireEvent.change(container.firstChild, { target: { value: 'a' } });
    // mock function should be called
    expect(handleChange).toHaveBeenCalled();
  });
});
