import request from '.';

import { batchUsersByRequest } from '../utils/constants';

const getUsers = (page = 1, nat) => {
  const params = {
    page,
    results: batchUsersByRequest,
  };
  const updatedParams = nat ? { ...params, nat } : params;

  return request('https://randomuser.me/api/1.3/', {
    method: 'GET',
    params: updatedParams,
  });
};

export default getUsers;
