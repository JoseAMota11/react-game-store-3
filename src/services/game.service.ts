import fetchSomething from '../classes/fetch';
import { KEY, URL_VARIABLE } from '../helpers/constants';

export const getGames = async (pageSize: number, currentPage: number) => {
  const request = {
    key: KEY,
    page_size: pageSize,
    page: currentPage,
  };
  const result = await fetchSomething.get(URL_VARIABLE, request);
  return result;
};
