const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'npolyakoff',
    database: 'nodejs-app',
    password: 'kotMarkiz123sas'
})

module.exports = pool.promise();