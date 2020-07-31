"use strict";

var _interopRequireDefault = require("C:/Users/aliah/Desktop/mevn-stack/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _stringUtil = _interopRequireDefault(require("../utilities/stringUtil"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var userSchema = new _mongoose.default.Schema({
  userName: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true); // for getting the fullName

userSchema.virtual('fullName').get(function () {
  var first = _stringUtil.default.capitalize(this.first.toLowerCase());

  var last = _stringUtil.default.capitalize(this.last.toLowerCase());

  return "".concat(first, " ").concat(last);
}); //method for validating hash password

userSchema.statics.passwordMatches = function (password, hash) {
  return _bcryptNodejs.default.compareSync(password, hash);
}; // runs before saving the document


userSchema.pre('save', function (next) {
  this.userName = this.userName.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  var unsafePassword = this.password;
  this.password = _bcryptNodejs.default.hashSync(unsafePassword);
  next();
});

var _default = _mongoose.default.model('user', userSchema);

exports.default = _default;