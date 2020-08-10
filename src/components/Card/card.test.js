import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Card from '.';

import {
  userImgSrc,
  userCardData,
  nationalityCardText,
  spainFlag,
} from '../../utils/constants';

describe('Component: Card', () => {
  it('should render user card and call onClick function', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Card
        id={userCardData.cardFirstLine}
        imgSrc={String(userImgSrc)}
        data={userCardData}
        onClick={handleClick}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();

    const card = container.firstChild;
    const button = card.querySelector('button');

    fireEvent.click(button);
    // mock function should be called
    expect(handleClick).toHaveBeenCalled();
    // mock function parameter expect to be equal to card id
    expect(handleClick.mock.calls[0][0]).toBe(userCardData.cardFirstLine);
  });

  it('should render nationality card', () => {
    const { container } = render(
      <Card
        id={nationalityCardText}
        imgSrc={String(spainFlag)}
        data={nationalityCardText}
        onClick={() => {}}
        isHighlight
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
