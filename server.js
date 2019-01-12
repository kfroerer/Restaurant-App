var express = require("express");
var path = require("path");
var app = express();
var PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var reservations = [];
var tables= [];

app.get("/", function(request, response) {
   
    response.sendFile(path.join(__dirname, "index.html"))
});

app.get("reservations.html", function(request, response) {
    response.sendFile(path.join(__dirname, "/reservations"))
});

app.get("/tables", function(request, response) {
    response.sendFile(path.join(__dirname, "tables.html"))
});











app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });