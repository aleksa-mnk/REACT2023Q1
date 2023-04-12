import { searchGifs } from '../../core/config/api';
import { vi } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('searchGifs', () => {
  it('returns an empty array when there are no results', async () => {
    const query = 'non-existent-query';
    const limit = 12;
    const offset = 0;
    const data = {
      data: [],
    };
    const response = {
      json: vi.fn().mockResolvedValue(data),
    };
    window.fetch = vi.fn().mockResolvedValue(response);
    const result = await searchGifs(query, limit, offset);
    expect(result).toEqual([]);
    expect(window.fetch).toHaveBeenCalledWith(expect.stringContaining(query));
  });

  it('returns an array of mapped results when there are results', async () => {
    const query = 'test-query';
    const limit = 12;
    const offset = 0;
    const data = {
      data: [
        {
          id: 'gif-1',
          title: 'Test Gif 1',
          source: 'Test Source 1',
          rating: 'g',
          slug: 'test-gif-1',
          images: {
            fixed_height: {
              url: 'https://test-url-1.com',
            },
          },
        },
        {
          id: 'gif-2',
          title: 'Test Gif 2',
          source: 'Test Source 2',
          rating: 'g',
          slug: 'test-gif-2',
          images: {
            fixed_height: {
              url: 'https://test-url-2.com',
            },
          },
        },
      ],
    };
    const response = {
      json: vi.fn().mockResolvedValue(data),
    };
    window.fetch = vi.fn().mockResolvedValue(response);
    const result = await searchGifs(query, limit, offset);
    expect(result).toEqual([
      {
        id: 'gif-1',
        title: 'Test Gif 1',
        source: 'Test Source 1',
        rating: 'g',
        slug: 'test-gif-1',
        imageUrl: 'https://test-url-1.com',
      },
      {
        id: 'gif-2',
        title: 'Test Gif 2',
        source: 'Test Source 2',
        rating: 'g',
        slug: 'test-gif-2',
        imageUrl: 'https://test-url-2.com',
      },
    ]);
    expect(window.fetch).toHaveBeenCalledWith(expect.stringContaining(query));
  });
});
