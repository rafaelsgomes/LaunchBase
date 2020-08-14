const { Pool } = require('pg')

module.exports = new Pool({
    user: 'rafael',
    password: 'countzero',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})