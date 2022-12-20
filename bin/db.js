const maria = require('mysql');

const conn = maria.createConnection({
    host:'52.78.17.225',
    port:3306,
    user:'keti',
    password:'keti1234!',
    database: "STUDENT"
})

module.exports = conn;