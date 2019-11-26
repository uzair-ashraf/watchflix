import axios from 'axios';
export const getUsers = async function () {
  let res = await axios.get('/api/users');
  let { data } = res;
  return data;
};
