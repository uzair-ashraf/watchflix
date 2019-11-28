const { movieDb } = require('./movieApi');

const getGeneralMovieData = async function () {
  const res = await movieDb.get('movie/76341');
  const { data } = res;
  return data;
};

module.exports = {
  getGeneralMovieData
};
