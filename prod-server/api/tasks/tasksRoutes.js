"use strict";

var _interopRequireWildcard = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./tasksController"));

var auth = _interopRequireWildcard(require("../../services/authService"));

var router = _express.default.Router();

router.post('/task', auth.requireLogin, controller.create);
router.get('/task', auth.requireLogin, controller.index);
router.get('/task/:id', auth.requireLogin, controller.show);
router.put('/task', auth.requireLogin, controller.update);
router.delete('/task/:id', auth.requireLogin, controller.remove);
var _default = router;
exports.default = _default;