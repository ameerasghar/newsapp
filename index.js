// external modules
var express = require("express");
var app = express();
app.set("view engine", "ejs");

// routes
const headlines = require("./routes/headlines");
const search = require("./routes/search");

// config
const PORT = 3000;

// // initiate express
// const app = express();

// routes
app.use("/", headlines);
app.use("/search/", search);

// listen to port 3000
app.listen(PORT | 3000);
console.log(`Server running on ${PORT}`);
