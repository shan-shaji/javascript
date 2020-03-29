const express = require("express");
const https = require("https");
const bodyParser  = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  
  res.sendFile(__dirname + "/index.html");
 
});



app.post("/", function(req, res){
  const city = req.body.cityName;
   const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=bfb2ed8caadd5d9ab1a55eea91be26a8&units=metric";

  https.get(url, function(response) {

    console.log(response.statusCode); // prints response status code 200, 300, 400 like that etc ...

    response.on("data", function(data) {
      const weatherData = JSON.parse(data); // parses it as an object . weather data is the object.
      const temp = weatherData.main.temp; // accessing the temprature 
      const weatherDescription = weatherData.weather[0].description; 
      const icon = weatherData.weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(iconUrl); // prints the  url of the icon of cloud from open weather
      res.write("<p>The weather Description " + weatherDescription + "</p>");
      res.write("<h1>The temprature in "+city+ " is " + temp + " degree celcius</h1>");
      res.write("<img src= " + iconUrl + ">");
      res.send(); // only one send can be used in a callback so we use write() function
    });
  });

});


app.listen(4400, function() {
  console.log("server is running on port 3000..");
});
