import fetchSomething from '../classes/fetch';
import { KEY, URL_VARIABLE } from '../helpers/constants';
import { Game } from '../interfaces/GameResult';

export const getGames = async (
  pageSize: number,
  currentPage: number | undefined
): Promise<object> => {
  const request = {
    key: KEY,
    page_size: pageSize,
    page: currentPage,
  };
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const result: Game = await fetchSomething.get(URL_VARIABLE, request);
  return result;
};

export const getGameById = async (
  id: number | string | undefined
): Promise<object> => {
  const NEW_URL = `${URL_VARIABLE}/${id}`;
  const request = {
    key: KEY,
  };

  const result: Game = await fetchSomething.get(NEW_URL, request);
  return result;
};
