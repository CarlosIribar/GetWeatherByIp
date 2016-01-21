'use strict';
let weather = require("./my-modules/weather");
let location = require("./my-modules/location");
let argv = require('yargs').option('location',{
  alias:'l',
  demand: false,
  describe: 'location for fetch weather',
  type: 'string'
})
.help('help')
.argv;

location(argv.location).then(function(data){
  return weather(data);
}).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log(error);
});
