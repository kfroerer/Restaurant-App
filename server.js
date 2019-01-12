var expresss = require("express");
var path = require("path");
var app = express();
var path = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json);