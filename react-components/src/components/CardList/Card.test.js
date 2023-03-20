import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from './Card';
const props = {
  title: 'Test Card',
  legs: 4,
  want: 'Some Want',
  score: 'Some Score',
  area: 'Some Area',
  imageUrl: 'https://example.com/image.jpg',
};
test('renders card with correct number of legs', () => {
  const { getByText } = render(React.createElement(Card, { ...props }));
  const legs = getByText(props.legs.toString());
  expect(legs).toBeInTheDocument();
});
test('renders card with correct want', () => {
  const { getByText } = render(React.createElement(Card, { ...props }));
  const want = getByText(props.want);
  expect(want).toBeInTheDocument();
});
test('renders card with correct score', () => {
  const { getByText } = render(React.createElement(Card, { ...props }));
  const score = getByText(props.score);
  expect(score).toBeInTheDocument();
});
test('renders card with correct area', () => {
  const { getByText } = render(React.createElement(Card, { ...props }));
  const area = getByText(props.area);
  expect(area).toBeInTheDocument();
});
