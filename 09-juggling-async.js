/*  JUGGLING ASYNC (Exercise 9 of 13)  
   
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/
 
 var http = require('http');
 var bl = require('bl');
 
 var output = [];
 var urls = process.argv.slice(2);
 
 function printData(output) {
    for (var i = 0; i < output.length; i++) {
        console.log(output[i])
    }
 }
 
 function makeRequest(url, index) {
    http.get(url, function (response) {  
        response.pipe(bl(function (err, data) {  
            if (err) {
                return console.error(err)
            }
            
            output[index] = data.toString();
            
            if (output.length == urls.length) {
                printData(output);
            }
            
        }));
    });
 }
 
 for (var i = 0; i < urls.length; i++) {
    makeRequest(urls[i], i);
 }