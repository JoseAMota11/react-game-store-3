import fetchSomething from '../classes/fetch';
import { URL_USER } from '../helpers/constants';
import { User } from '../interfaces/User';

export const getUserFromAPI = async (): Promise<object> => {
  const user: User = await fetchSomething.get(URL_USER);
  return user;
};
