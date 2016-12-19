'use strict';

const uuid = require('node-uuid');
const createError = require('http-errors');
const debug = require('debug')('joke:joke');
const storage = require('../lib/diskStorage.js');

const Joke = module.exports = function(setup, punchline) {
  debug('joke constructor'); //just gives a name

  if (!setup) throw new Error('expected a joke setup');
  if (!punchline) throw new Error('expected a joke punchline');

  this.id = uuid.v1();
  this.setup = setup;
  this.punchline = punchline;
};

Joke.createJoke = function(_joke) { //we'll use 'joke' for something else - don't want a conflict
  debug('createNote'); //just helps us know where the debug is coming from.

}//this is a static method - not attached to constructor - a prototype method would be on every instance.
