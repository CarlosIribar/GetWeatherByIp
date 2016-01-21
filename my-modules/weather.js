'use strict';
let request = require("request");
let getWeather = function(location){
  return new Promise(function(resolve, reject){
      if (!location) {
        reject("No location provided");
      } else {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)},uk&units=metric&appid=2de143494c0b295cca9337e1e96b00e0`;
        request({url,json:true},(error, response, body) => {
          if (error) {
              reject("There is an error");
          } else {
              let body = response.body;
              resolve(`It´s ${body.main.temp}°C in ${body.name}`);
          }
        });
      }
  });
}

module.exports = getWeather;
