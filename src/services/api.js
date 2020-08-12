import request from '.';

const getUsers = (page = 1, nat) => {
  const params = {
    page,
    results: 50,
    seed: 'abc',
  };
  const updatedParams = nat ? { ...params, nat } : params;

  return request('https://randomuser.me/api/1.3/', {
    method: 'GET',
    params: updatedParams,
  });
};

export default getUsers;
