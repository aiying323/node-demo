const express = require('express');

const app = require('./app.js');

const server = app.listen(8081,'192.168.2.105', function () {
 
  const host = server.address().address
  const port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})