import fetchSomething from '../classes/fetch';
import { KEY, URL_GAMES } from '../helpers/constants';

export const searchGame = async (search: string, page: number) => {
  const req = {
    key: KEY,
    search,
    search_exact: true,
    page,
  };
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const gameResult = await fetchSomething.get(URL_GAMES, req);
  return gameResult;
};
