const { Pool } = require('pg');

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

db.connect();

module.exports = db;
