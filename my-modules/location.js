'use strict'
let request = require("request");
let url = "http://ipinfo.io";
let getLocation = function(location){
  return new Promise(function(resolve, reject){
    if (!location) {
      request({url, json:true}, (error,response,body) => {
        if (error) {
          reject("There is an error");
        } else {
          resolve(body.city);
        }
      });
    } else {
      resolve(location);
    }
  });
}

module.exports = getLocation;
