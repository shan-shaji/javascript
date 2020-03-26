const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  // res.send("<h1>Hai Shan, How are you?</h1>");
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/", function(req, res) {
  // res.send("<h1>Thank you for the post request!</h1>");
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var sum = Number(num1) + Number(num2);
  res.send("sum of number = " + sum);

});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var Bmi = weight/(height*height);
    res.send("<h2>The Bmi = " + Bmi  + "</h2>");

})

app.listen(2200, function() {
  console.log("listening in port 2200");
});
