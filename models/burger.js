// create the code that will call the ORM functions using burger specific input for the ORM.

const orm = require("../config/orm.js")

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne(col1, col2, val1, val2, cb) {
        orm.insertOne("burgers", col1, col2, val1, val2, function (res) {
            cb(res);
        });
    },
    updateOne(col1, valNew, col2, cId, cb) {
        orm.updateOne("burgers", col1, valNew, col2, cId, function (res) {
            cb(res);
        });
    },
};

module.exports = burger