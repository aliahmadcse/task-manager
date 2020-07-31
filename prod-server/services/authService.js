"use strict";

var _interopRequireDefault = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = generateJWT;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;
exports.getUserName = getUserName;
exports.getUserId = getUserId;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function generateJWT(user) {
  var tokenData = {
    userName: user.userName,
    id: user._id
  };
  return _jsonwebtoken.default.sign({
    user: tokenData
  }, process.env.TOKEN_SECRET);
}

function requireLogin(req, res, next) {
  var token = decodeToken(req);

  if (!token) {
    return res.status(401).json({
      message: 'You have to be logged in'
    });
  }

  next();
}

function decodeToken(req) {
  var token = req.headers.authorization || req.headers['authorization'];

  if (!token) {
    return null;
  }

  try {
    return _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {
    return null;
  }
}

function getUserName(req) {
  var token = decodeToken(req);

  if (!token) {
    return null;
  }

  return token.user.userName;
}

function getUserId(req) {
  var token = decodeToken(req);

  if (!token) {
    return null;
  }

  return token.user.id;
}