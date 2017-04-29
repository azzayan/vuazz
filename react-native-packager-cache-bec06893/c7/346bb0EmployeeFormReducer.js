Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../actions/types');

var INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.EMPLOYEE_UPDATE:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, action.payload.prop, action.payload.value));
    case _types.EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};