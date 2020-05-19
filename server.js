var http = require('http');
const fs = require("fs")
const color = "purple" 

version = (fs.readFileSync("/VERSION", 'utf8')).toString()
console.log("Starting MyApp version " + version)
http.createServer(function (req, res) {
  res.write('<h1>GitOps MyApp</h1>');
  res.write('<h2 style="color:'+color+'">Version '+version+'</h2>');
  res.end(); 
}).listen(8080); 
