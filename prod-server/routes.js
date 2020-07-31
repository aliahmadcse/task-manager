"use strict";

var _interopRequireDefault = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerApiRoutes = registerApiRoutes;

var _tasksRoutes = _interopRequireDefault(require("./api/tasks/tasksRoutes"));

var _registerRoutes = _interopRequireDefault(require("./api/register/registerRoutes"));

var _authRoutes = _interopRequireDefault(require("./api/auth/authRoutes"));

var _userRoutes = _interopRequireDefault(require("./api/userRoutes/userRoutes"));

function registerApiRoutes(app) {
  app.use('/api', _tasksRoutes.default);
  app.use('/api', _registerRoutes.default);
  app.use('/api', _authRoutes.default);
  app.use('/api', _userRoutes.default);
}