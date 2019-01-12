var express = require("express");
var path = require("path");
var app = express();
var PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var reservations = [
    {   
        name: "Joe",
        phone: "555-555-5555",
        email: "cool@guy.com",
        tableNum: "1"
    }
];
var waitList= [];

app.get("/", function(request, response) {
   
    response.sendFile(path.join(__dirname, "index.html"))
});

app.get("/reservations", function(request, response) {
    response.sendFile(path.join(__dirname, "reservations.html"))
});

app.get("/tables", function(request, response) {
    response.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/api/tables", function(request, response) {
    return response.json(reservations);
})

app.post("/api/tables", function(request, response){
    if (reservations.length < 5) {
        reservations.push(request.body)
    }
    else {
        waitList.push(requeset.body)
    }

    console.log(newReservation)
})










app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });