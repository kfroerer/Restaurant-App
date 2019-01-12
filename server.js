var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json);

var res = [];
var tab= [];

app.get("/", function(request, response) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/reservations", function(request, response) {
    res.sendFile(path.join(__dirname, "reservations.html"))
});

app.get("/tables", function(request, response) {
    res.sendFile(path.join(__dirname, "tables.html"))
});











app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });