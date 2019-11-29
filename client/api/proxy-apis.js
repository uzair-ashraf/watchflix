const { movieDb } = require('./movieApi');

const getGeneralMovieData = async function () {
  const genres = await movieDb.get('/genre/movie/list');
  const { data } = genres;
  const randomGenreIds = [];
  let count = 0;
  while (count < 5) {
    const randomNum = Math.floor(Math.random() * data.genres.length);
    const genreId = data.genres[randomNum].id;
    if (!randomGenreIds.includes(genreId)) {
      randomGenreIds.push(genreId);
      count++;
    }
  }
  const filteredGenres = data.genres.filter(genre => randomGenreIds.includes(genre.id));
  const responses = await Promise.all(randomGenreIds.map(id => {
    return movieDb.get('/discover/movie', {
      params: {
        with_genres: id
      }
    });
  }));
  const responseData = responses.map((response, index) => {
    return {
      genre: filteredGenres[index].name,
      movies: response.data
    };
  });
  return responseData;
};

module.exports = {
  getGeneralMovieData
};
