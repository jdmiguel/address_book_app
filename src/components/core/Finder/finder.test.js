import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Finder from '.';

import { literals } from '../../../utils/constants';

describe('Component: Finder', () => {
  it('should render and call onChange function', () => {
    const { container } = render(<Finder />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with search icon and call onChange function', () => {
    const handleChange = jest.fn();
    const { container, getByPlaceholderText } = render(
      <Finder isSearching onChange={handleChange} />,
    );

    expect(container.firstChild).toMatchSnapshot();

    fireEvent.change(getByPlaceholderText(literals.finderPlaceholder), {
      target: { value: 'a' },
    });
    // mock function should be called
    expect(handleChange).toHaveBeenCalled();
  });

  it('should render with matched icon', () => {
    const { container } = render(<Finder isMatched />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
