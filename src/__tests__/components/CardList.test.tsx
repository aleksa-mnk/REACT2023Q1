import { render, screen } from '@testing-library/react';
import CardList from '../../components/CardList/CardList';

describe('CardList', () => {
  test('renders a card list with no cards', () => {
    render(
      <CardList
        cards={{
          data: [],
          pagination: { total_count: 0, count: 0, offset: 0 },
          meta: { status: 200, msg: 'OK', response_id: 'response_id' },
        }}
      />
    );
    const cardListElement = screen.getByTestId('card-list');
    expect(cardListElement.children.length).toBe(0);
  });

  test('renders a card list with one card', () => {
    const testData = [
      {
        type: 'gif',
        id: 'test_id',
        url: 'test_url',
        slug: 'test_slug',
        source: 'test_source',
        title: 'Test Title',
        rating: 'g',
        images: {
          fixed_height: {
            url: 'test_url',
          },
        },
      },
    ];

    render(
      <CardList
        cards={{
          data: testData,
          pagination: { total_count: 1, count: 1, offset: 0 },
          meta: { status: 200, msg: 'OK', response_id: 'response_id' },
        }}
      />
    );
    const cardListElement = screen.getByTestId('card-list');
    expect(cardListElement.children.length).toBe(1);
  });
});
