/**
 * Created by rancongjie on 16/3/11.
 */
var express = require('./config/express');
var mongodb = require('./config/mongoose');

var db = mongodb();
var app = express();

module.exports = app;

