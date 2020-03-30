var soap = require('soap');
var express = require('express');
var app = express();

/** 
-this is remote service defined in this file, that can be accessed by clients, who will supply args
-response is returned to the calling client
**/


// xml data is extracted from wsdl file created
var xml = require('fs').readFileSync('./wsdl/global-weather.wsdl','utf8');

var mockGetCitiesByCountry = require('fs').readFileSync('./mock/GetCitiesByCountry','utf8');

var mockGetWeather = require('fs').readFileSync('./mock/GetWeather','utf8');

var service = {
    GlobalWeather : {
        GlobalWeatherSoap :{
            GetCitiesByCountry:function(args){
                return mockGetCitiesByCountry;
            },
            GetWeather:function(args){
                return mockGetWeather;            
            }
        }
   }
}

// xml data is extracted from wsdl file created
var xml = require('fs').readFileSync('./wsdl/global-weather.wsdl','utf8');

//create an express server and pass it to a soap server
var server = app.listen(8080,function(){
    var host = "127.0.0.1";
    var port = server.address().port;
});
soap.listen(server,'/GlobalWeather',service,xml);