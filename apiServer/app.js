const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = require('./routes/file.js');
const fs = require('fs');

app.use('/public',express.static('./public'));


const mockjs = require('./routes/mock.js');
const jsonjs = require('./routes/json.js');

app.use('/mock',mockjs);
app.use('/json',jsonjs);

let state = JSON.parse(fs.readFileSync( './json/state.json'));

// 捕获的404异常
app.use((req, res, next) => {
  next(createError(404));
});

// 异常拦截
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = err;

  res.status(err.status || 500);
  res.json({
  	status:err.status,
  	msg:state[err.status],
  	localsMsg:err.message
  });
});



module.exports = app;
