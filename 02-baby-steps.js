/*  BABY STEPS (Exercise 2 of 13)   

  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout). 

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/

var sum = 0;

// Start at second argument because first two commandline arguments are:
// 'node' and '02-baby-steps.js'
for (var i = 2; i < process.argv.length; i++) {
    // Coerce process.argv strings into numbers
    sum += Number(process.argv[i]);
}

console.log(sum);