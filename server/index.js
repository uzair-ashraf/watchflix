const express = require('express');
const path = require('path');
const db = require('./database');
const { getGeneralMovieData, getMovieTrailer, searchMovie } = require('../client/api/proxy-apis');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', (req, res, next) => {
  if (Object.keys(req.query).length === 0) {
    const sql = `
    select "user_id",
           "username"
      from "users"
  `;
    db.query(sql)
      .then(result => {
        res.json(result.rows);
      })
      .catch(error => next(error));
  } else {
    const { id } = req.query;
    const sql = `
    select "user_id",
           "username"
      from "users"
      where "user_id" = ${id}
    `;
    db.query(sql)
      .then(result => {
        res.json(result.rows[0]);
      })
      .catch(err => next(err));
  }

});

app.post('/api/list', (req, res, next) => {
  const { id } = req.query;
  const { id: titleId, backdrop_path, overview, poster_path, title, vote_average } = req.body;
  const sql = `insert into list (userid, id, backdrop_path, poster_path, title, vote_average, overview)
              VALUES
              ( $1, $2, $3, $4, $5, $6, $7);`;
  db.query(sql, [id, titleId, backdrop_path, poster_path, title, vote_average, overview])
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/list', (req, res, next) => {
  const { id } = req.query;
  const sql = `
  select *
  from list
  where userId = ${id};
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));

});
app.get('/api/movies', (req, res, next) => {
  getGeneralMovieData()
    .then(response => {
      res.json(response);
    })
    .catch(err => next(err));
});
app.get('/api/video', (req, res, next) => {
  const { id } = req.query;
  getMovieTrailer(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});
app.get('/api/search', (req, res, next) => {
  searchMovie(req.query.query)
    .then(result => res.json(result))
    .catch(err => next(err));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
