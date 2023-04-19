import { useSearchGifsQuery } from '../store/giphyApi';

export const useFetchGifs = (query: string) => {
  const { data, error, isLoading } = useSearchGifsQuery({ query });

  return {
    gifs: data ?? [],
    error,
    isLoading,
  };
};
