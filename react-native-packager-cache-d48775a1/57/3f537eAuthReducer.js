Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../actions/types');

var INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.EMAIL_CHANGED:
      return babelHelpers.extends({}, state, { email: action.payload });
    case _types.PASSWORD_CHANGED:
      return babelHelpers.extends({}, state, { password: action.payload });
    case _types.LOGIN_USER_START:
      return babelHelpers.extends({}, state, { loading: true, error: '' });
    case _types.LOGIN_USER_SUCCESS:
      return babelHelpers.extends({}, state, INITIAL_STATE, { user: action.payload });
    case _types.LOGIN_USER_FAIL:
      return babelHelpers.extends({}, state, { error: 'Authentication Failed.', password: '', loading: false });
    default:
      return state;
  }
};