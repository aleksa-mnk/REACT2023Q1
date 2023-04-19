import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GifsResponse } from '../types';

const API_KEY = 'j4WU3qi46fVpPHayRT1Cfi4YVjiGYYyh';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export interface GiphyResponse {
  type: string;
  id: string;
  url: string;
  slug: string;
  source: string;
  title: string;
  rating: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

export const giphyApi = createApi({
  reducerPath: 'giphyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchGifs: builder.query<GifsResponse, { query: string; limit?: number; offset?: number }>({
      query: ({ query, limit = 12, offset = 0 }) => ({
        url: `/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=ru`,
      }),
    }),
  }),
});

export const { useSearchGifsQuery } = giphyApi;
