const Pool = require("pg").Pool;

const pool = new Pool({
    user: "root",
    host: "localhost",
    database: "perntodo",
    password: "root",
    port: "5000"
})

module.exports = pool;