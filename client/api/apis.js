import axios from 'axios';

export const getUsers = async function () {
  const res = await axios.get('/api/users');
  const { data } = res;
  return data;
};

export const getCompleteUserData = async function (id) {
  const res = await axios.get(`/api/users?id=${id}`);
  const { data } = res;
  return data;
};
