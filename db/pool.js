const { Pool } = require('pg');

const connectionString = require('../utils/dbString');

const pool = new Pool({ connectionString });

module.exports = pool;
