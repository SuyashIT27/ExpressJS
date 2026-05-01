// Installing the express 
// 1- npm init
// 2- npm install express --save

// Making first express js server
const express=require('express');
const app=express();
app.use((req,res,next)=>{
  console.log("Come into the first middleware",req.url,req.method);
  next(); 
})
app.use((req,res,next)=>{
  console.log("Come into the second middleware");
  next();
})
app.use((req,res,next)=>{
  console.log("Come into the third middleware");
})
const http=require('http');

const server=http.createServer(app);
server.listen(3008,()=>{
  console.log("Server was running at the port http://localhost:3008");
})
