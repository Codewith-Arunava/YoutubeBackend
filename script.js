// var arr =[2,4,"hey",true,6.5,"hello",false,8];
// arr.forEach(function(val) {
//     console.log(val + " hello");
// })

// var arr=[1,2,3,4];

// var ans= arr.map(function(val) {
//     return val * 2;   
// })
// console.log(ans);

// var arr=[1,2,3,4];
// var ans=arr.filter(function(val) {
//     if(val >= 3) { return true; }
//     else { return false; }
// })
// console.log(ans);

// var arr= [1,2,3,4];
// var ans=arr.find(function(val) {
//     if(val === 3) return true; 
// })
// console.log(ans);

//object

// var obj = {
//    name: "John",
//    age: 30,

// }
// obj.name

// function val() {
//    return 3;

// }
// var ans=val();



//async js


   //node.js

   

// const fs= require('fs');

// fs.appendFile('hey.txt', 'accha huu', function(err) {
//       if(err) console.log(err);
//       else console.log("file written successfully");
// })

// fs.rename("hey.txt", "hello.txt", function(err) {
//       if(err) console.log(err);
//       else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy/copy.txt", function(err) {
//       if(err) console.log(err);
//       else console.log("file copied successfully");
// })

// fs.unlink("hello.txt", function(err) {
//       if(err) console.error(err);
//       else console.log("file deleted successfully");
// })

// fs.rmdir("./copy", {recursive: true }, function(err) {
//       if(err) console.error(err);
//       else console.log("directory deleted successfully");
// })



//HTTP module

// const http = require('http');

// const server = http.createServer(function(req, res) {
//       res.end("hello world");
// })

// server.listen(3000, function() {
//       console.log("server is running on port 3000");
// }) 





const express = require('express')

const app = express()

app.use(function(req, res, next) {
  console.log("middleware chala");
  next();
})

app.use(function(req, res, next) {
  console.log("middleware chala ak aur bar");
  next();
})


//routes create karna
app.get('/', function(req, res) {
  res.send('Hellooooo brooooo')
})

app.get('/about', function(req, res) {
  res.send('About page aya brooooo')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})