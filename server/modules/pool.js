const pg = require('pg');

// connect pg to DB
const Pool = pg.Pool;

const pool = new Pool ({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});


pool.on('connect', () => {
    console.log('connected to DB');
});

pool.on('error', (error) => {
    console.log('DB pool error', error);
});

module.exports = pool;