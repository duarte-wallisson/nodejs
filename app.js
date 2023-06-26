const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/template.html")
})

app.get("/page1", function (req, res) {
    res.send("Welcome to my page 1!")
})
app.get("/page2", function (req, res) {
    res.send("Welcome to my page 2!")
})

app.get("/params/:job/:name/:color", function (req, res) {
    res.send("<h1>Hello " + req.params.name + "</h1>" +
        "<h2>Your job is:" + req.params.name + "</h2>" +
        "<h3> Favorite color is: " + req.params.color + "</h3>")
})

app.listen(8080, function () {
    console.log("Server on in http://localhost:8080")
})
