const API_KEY = 'j4WU3qi46fVpPHayRT1Cfi4YVjiGYYyh';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

interface GiphyResponse {
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

export async function searchGifs(query: string, limit = 12, offset = 0) {
  const url = `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=ru`;
  const response = await window.fetch(url);
  const data = await response.json();
  if (data.data && data.data.length > 0) {
    return data.data.map((item: GiphyResponse) => {
      console.log('Item:', item);
      return {
        id: item.id,
        title: item.title,
        source: item.source,
        rating: item.rating,
        slug: item.slug,
        imageUrl: item.images.fixed_height.url,
      };
    });
  }
  return [];
}
