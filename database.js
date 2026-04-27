'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',  // replace with your database username
  host: 'localhost',        // replace with your database host
  database: 'your_database',// replace with your database name
  password: 'your_password',// replace with your database password
  port: 5432,               // default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database.');
});

pool.on('error', (error) => {
  console.error('Error connecting to the database:', error);
});

module.exports = pool;
