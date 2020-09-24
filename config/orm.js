const connection = require("./connection.js")
const mysql = require("mysql")


const orm = {
    selectAll: (table, cb) => {
        let queryStr = `SELECT * FROM ${table}` ;
        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },

    insertOne: (table, col1, col2, val1, val2, cb) => {
        let queryStr = `INSERT INTO ??(??, ??) VALUES (?, ?)`;
        connection.query(queryStr, [table, col1, col2, val1, val2], (err,result) => {
            if (err) throw err;
            cb(result)
            console.log(queryStr.sql)
        })
    },

    updateOne: (table, col1, valNew, col2, cId, cb) => {
        let queryStr = `UPDATE ?? SET ?? = ? WHERE ?? = ?`
        connection.query(queryStr, [table, col1, valNew, col2, cId], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;