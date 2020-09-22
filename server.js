const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 7000;
const app = express();

// Middleware for static files
app.use(express.static("public"));

// Enabling JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enabling Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// API routes.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Begin server 
app.listen(PORT, function() {
  console.log("Server listening on: port# " + PORT);
});
