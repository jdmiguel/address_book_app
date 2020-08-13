import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Card from '.';

import {
  defaultImgSrc,
  defaultCardData,
  defaultNationalityText,
  nationalities,
} from '../../../utils/constants';

describe('Component: Card', () => {
  it('should render user card and call onClick function', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Card
        id={defaultCardData.cardFirstLine}
        imgSrc={defaultImgSrc}
        data={defaultCardData}
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
    expect(handleClick.mock.calls[0][0]).toBe(defaultCardData.cardFirstLine);
  });

  it('should render nationality card', () => {
    const { container } = render(
      <Card
        id={defaultNationalityText}
        imgSrc={nationalities.spanish.src}
        data={defaultNationalityText}
        onClick={() => {}}
        isHighlight
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
