const express = require('express');
const path = require('path');
const db = require('./database');
const { getGeneralMovieData } = require('../client/api/proxy-apis');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', (req, res, next) => {
  console.log('request incoming');
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
        res.json(result.rows);
      })
      .catch(err => next(err));
  }

});

app.get('/api/movies', (req, res, next) => {
  getGeneralMovieData()
    .then(response => {
      res.json(response);
    })
    .catch(err => next(err));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
