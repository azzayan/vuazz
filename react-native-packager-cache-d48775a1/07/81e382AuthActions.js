Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.passwordChanged = exports.emailChanged = undefined;

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _types = require('./types');

var emailChanged = exports.emailChanged = function emailChanged(text) {
  return {
    type: _types.EMAIL_CHANGED,
    payload: text
  };
};

var passwordChanged = exports.passwordChanged = function passwordChanged(text) {
  return {
    type: _types.PASSWORD_CHANGED,
    payload: text
  };
};

var loginUser = exports.loginUser = function loginUser(_ref) {
  var email = _ref.email,
      password = _ref.password;

  return function (dispatch) {
    dispatch({ type: _types.LOGIN_USER_START });

    _firebase2.default.auth().signInWithEmailAndPassword(email.trim(), password.trim()).then(function (user) {
      return loginUserSuccess(dispatch, user);
    }).catch(function () {
      _firebase2.default.auth().createUserWithEmailAndPassword(email.trim(), password.trim()).then(function (user) {
        return loginUserSuccess(dispatch, user);
      }).catch(function () {
        return loginUserFail(dispatch);
      });
    });
  };
};

var loginUserFail = function loginUserFail(dispatch) {
  dispatch({ type: _types.LOGIN_USER_FAIL });
};

var loginUserSuccess = function loginUserSuccess(dispatch, user) {
  dispatch({
    type: _types.LOGIN_USER_SUCCESS,
    payload: user
  });

  _reactNativeRouterFlux.Actions.main();
};