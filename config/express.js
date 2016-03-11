/**
 * Created by rancongjie on 16/3/11.
 */
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function () {
  console.log('init express');
  var app = express();

  app.use(bodyParser.json());

  require('../app/routes/news.server.route')(app);

  app.use(function (req, res, next) {
    res.status(404);
    try {
      return res.json('not found');
    } catch (e) {
      console.error('send err');
    }
  });
  app.use(function (err, req, res, next) {

    if (!err) {
      return next();
    }
    res.status(500);
    try {
      return res.json(err.message || 'server error');
    } catch (e) {
      console.log('send err');
    }
  });
  return app;
};
