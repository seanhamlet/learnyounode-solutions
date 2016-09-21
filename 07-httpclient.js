/*  HTTP CLIENT (Exercise 7 of 13)  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/

var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');
    
    response.on('error', function(err) {
       console.error(err);
    });
    
    response.on('data', function(data) {
        console.log(data);
    });
});