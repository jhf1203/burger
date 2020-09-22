const burger = require("../models/burger.js")
const express = require("express")

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const burgerObj = {
            burgers: data
        };
        console.log("burgerobj wuz here");
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
    console.log("i clicked post")
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router

// 4. Create the `router` for the app, and export the `router` at the end of your file.