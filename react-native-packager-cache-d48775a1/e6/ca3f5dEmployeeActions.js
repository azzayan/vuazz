Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeeDelete = exports.employeeSave = exports.employeesFetch = exports.employeeCreate = exports.employeeUpdate = undefined;

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

var employeesFetch = exports.employeesFetch = function employeesFetch() {
  var _firebase$auth2 = _firebase2.default.auth(),
      currentUser = _firebase$auth2.currentUser;

  return function (dispatch) {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/employees').on('value', function (snapshot) {
      dispatch({ type: _types.EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

var employeeSave = exports.employeeSave = function employeeSave(_ref3) {
  var name = _ref3.name,
      phone = _ref3.phone,
      shift = _ref3.shift,
      uid = _ref3.uid;

  var _firebase$auth3 = _firebase2.default.auth(),
      currentUser = _firebase$auth3.currentUser;

  return function (dispatch) {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/employees/' + uid).set({ name: name, phone: phone, shift: shift }).then(function () {
      dispatch({ type: _types.EMPLOYEE_SAVE_SUCCESS });
      _reactNativeRouterFlux.Actions.employeeList({ type: 'reset' });
    });
  };
};

var employeeDelete = exports.employeeDelete = function employeeDelete(_ref4) {
  var uid = _ref4.uid;

  var _firebase$auth4 = _firebase2.default.auth(),
      currentUser = _firebase$auth4.currentUser;

  return function () {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/employees/' + uid).remove().then(function () {
      _reactNativeRouterFlux.Actions.employeeList({ type: 'reset' });
    });
  };
};