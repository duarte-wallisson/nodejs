const express = require("express")
const app = express()

app.get("/", function (req, res){
    res.send("Welcome to my app!")
})

app.get("/page1", function (req, res){
    res.send("Welcome to my page 1!")
})
app.get("/page2", function (req, res){
    res.send("Welcome to my page 2!")
})



app.listen(8080, function (){
    console.log("Server on in http://localhost:8080")
})
