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
  const responses = Promise.all(() => randomGenreIds.map(id => {
    return movieDb.get('/discover/movie', {
      params: {
        with_genres: id
      }
    });
  }));
  console.log(responses);
  return responses;
  // console.log(randomGenreIds.join());

  // const generalMovies = await movieDb.get('/discover/movie', {
  //   params: {
  //     with_genres: randomGenreIds
  //   }
  // });
  // const { data: movies } = generalMovies;

  // return movies;

};

module.exports = {
  getGeneralMovieData
};
