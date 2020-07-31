"use strict";

var _interopRequireDefault = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtil = _interopRequireDefault(require("../../utilities/stringUtil"));

var _userModel = _interopRequireDefault(require("../../model/userModel"));

var _authService = require("../../services/authService");

function index(req, res) {
  var validation = validateIndex(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  _userModel.default.findOne({
    userName: req.body.userName.toLowerCase()
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(401).json();
    }

    var passwordMatch = _userModel.default.passwordMatches(req.body.password, user.password);

    if (!passwordMatch) {
      return res.status(401).json();
    }

    var token = (0, _authService.generateJWT)(user);
    return res.status(200).json({
      token: token
    });
  });
}

function validateIndex(body) {
  var errors = '';

  if (_stringUtil.default.isEmpty(body.userName)) {
    errors += 'UserName is required. ';
  }

  if (_stringUtil.default.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }

  return {
    isValid: _stringUtil.default.isEmpty(errors),
    message: errors
  };
}