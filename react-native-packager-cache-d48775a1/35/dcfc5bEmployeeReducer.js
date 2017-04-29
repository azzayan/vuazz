Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../actions/types');

var INITIAL_STATE = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};