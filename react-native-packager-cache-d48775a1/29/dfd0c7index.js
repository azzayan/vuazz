Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _AuthReducer = require('./AuthReducer');

var _AuthReducer2 = babelHelpers.interopRequireDefault(_AuthReducer);

exports.default = (0, _redux.combineReducers)({
  auth: _AuthReducer2.default
});