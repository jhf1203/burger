// create the code that will call the ORM functions using burger specific input for the ORM.

const orm = require("../config/orm.js")

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne(val1, val2, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", val1, 0, function (res) {
            cb(res);
        });
    },
    updateOne(valNew, cId, cb) {
        console.log(`valnew ${valNew} cid ${cId}`)
        orm.updateOne("burgers", "devoured", valNew, "id", cId, function (res) {
            cb(res);
        });
    },
};

module.exports = burger