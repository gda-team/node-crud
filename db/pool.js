const { Pool } = require('pg');

const connectionString = require('../config/dbString');

const pool = new Pool({ connectionString });

module.exports = pool;
