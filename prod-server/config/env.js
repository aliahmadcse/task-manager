"use strict";

var _interopRequireDefault = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnv = setEnv;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function setEnv(app) {
  if (process.env.NODE_ENV === 'production') {
    setProdEnv(app);
  } else {
    setDevEnv(app);
  }
}

function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  process.env.PORT = 3000;
  process.env.DB_URL = 'mongodb://localhost:27017/task_manager';
  process.env.TOKEN_SECRET = 'my-development-secret';
  app.use(_bodyParser.default.json());
  app.use((0, _morgan.default)('dev'));
  app.use((0, _cors.default)());
}

function setProdEnv(app) {
  // process.env.DB_URL = process.env.MONGODB_URI;
  process.env.PORT = 27638;
  console.log(process.env.NODE_ENV);
  process.env.DB_URL = 'mongodb://aliahmaddev:Aliahmad244623@ds121248.mlab.com:21248/heroku_g7qvmtt2'; // process.env.TOKEN_SECRET = process.env.JWT_SECRET;

  process.env.TOKEN_SECRET = 'Aliahmad';
  app.use(_bodyParser.default.json());
  app.use(_express.default.static(__dirname + '/../../dist'));
}