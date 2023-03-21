import fetchSomething from '../classes/fetch';
import { URL_COMMENTS } from '../helpers/constants';

export const getComments = async () => {
  const response = await fetchSomething.get(URL_COMMENTS);
  return response;
};

export const postComment = async (data: object) => {
  const options: object = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  const response = await fetchSomething.post(URL_COMMENTS, options);
  return response;
};
