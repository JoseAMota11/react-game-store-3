import fetchSomething from '../classes/fetch';
import { KEY, URL_VARIABLE } from '../helpers/constants';
import { Game } from '../interfaces/GameResult';

export const getGames = async (
  pageSize: number,
  currentPage: number
): Promise<object> => {
  const request = {
    key: KEY,
    page_size: pageSize,
    page: currentPage,
  };
  const result: Game = await fetchSomething.get(URL_VARIABLE, request);
  return result;
};
