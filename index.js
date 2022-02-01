const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send("Welcome")
});

app.get("/body", (req,res) => {
    res.send("body success")
});

app.get("/average", (req,res) => {
    res.sendFile(path.join(__dirname + "/home.html"))
});

app.post("/average", (req,res) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var num3 = req.body.num3;
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    var result = (num1 + num2 + num3)/3;
    res.send(result.toString());
});

app.get(("/:name"), (req,res) => {
    console.log(req.name)
    res.send("Weclome " + req.params.name + " to the Backend" )
});

app.listen(2000, () => {
    console.log("Server is running on port 2000")
});
