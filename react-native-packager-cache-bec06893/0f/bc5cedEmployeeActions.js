Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeeCreate = exports.employeeUpdate = undefined;

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _types = require('./types');

var employeeUpdate = exports.employeeUpdate = function employeeUpdate(_ref) {
  var prop = _ref.prop,
      value = _ref.value;

  return {
    type: _types.EMPLOYEE_UPDATE,
    payload: { prop: prop, value: value }
  };
};

var employeeCreate = exports.employeeCreate = function employeeCreate(_ref2) {
  var name = _ref2.name,
      phone = _ref2.phone,
      shift = _ref2.shift;

  var _firebase$auth = _firebase2.default.auth(),
      currentUser = _firebase$auth.currentUser;

  return function (dispatch) {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/employees').push({ name: name, phone: phone, shift: shift }).then(function () {
      dispatch({ type: _types.EMPLOYEE_CREATE });
      _reactNativeRouterFlux.Actions.employeeList({ type: 'reset' });
    });
  };
};