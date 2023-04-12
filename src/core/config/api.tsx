const API_KEY = 'j4WU3qi46fVpPHayRT1Cfi4YVjiGYYyh';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export async function searchGifs(query: string, limit = 10, offset = 0) {
    const url = `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=ru`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.data && data.data.length > 0) {
        return data.data.map((item: any) => {
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
