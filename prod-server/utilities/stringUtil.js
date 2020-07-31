"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.string.trim");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  isEmpty: function isEmpty(value) {
    return !value || !value.trim();
  },
  capitalize: function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
};
exports.default = _default;