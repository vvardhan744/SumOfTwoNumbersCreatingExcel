// const sql = require('mssql');
// var config = require("./config");
// const poolPromise = new sql.ConnectionPool(config.sqlPool)
//   .connect()
//   .then(pool => {
//     console.log('Connected to MSSQL')
//     return pool
//   })
//   .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

// module.exports = {
//   sql, poolPromise
// }