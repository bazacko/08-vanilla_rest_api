'use strict';

const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const jsonParser = require('body-parser').json();
const debug = require('debug')('joke:server'); //name of app, name of module

const app = express();
app.disable('x-powered-by'); //stupid

const Joke = require('./model/joke.js');
const storage = require('./lib/diskStorage.js');
const PORT = process.env.PORT || 2001;


app.use(morgan('dev')); //logging happens through morgan

app.get('/test', function(req, res) {
  debug('GET: /test'); //leave the debug at the top of the route...

  res.json({'msg': 'test route!'});
});

app.post('/api/joke', jsonParser, function(req, res, next) { //'next' isn't strictly necessary.
//callback is last function.
//stuff in middle is... middleware
  debug('POST: /api/note');
  //TODO: build POST route

});

app.listen(PORT, () => { //called "lexical error function"
  console.log(`Server listening on port ${PORT}`);
});
