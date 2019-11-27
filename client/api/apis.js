import axios from 'axios';
export const getUsers = async function () {
  let res = await axios.get('/api/users');
  let { data } = res;
  return data;
};
export const getCompleteUserData = async function (id) {
  let res = await axios.get(`/api/users?id=${id}`);
  let { data } = res;
  return data;
};
