Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parkDelete = exports.parkSave = exports.parksFetch = exports.parkCreate = exports.parkUpdate = undefined;

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _types = require('./types');

var parkUpdate = exports.parkUpdate = function parkUpdate(_ref) {
  var prop = _ref.prop,
      value = _ref.value;

  return {
    type: _types.PARK_CHECK_IN_UPDATE,
    payload: { prop: prop, value: value }
  };
};

var parkCreate = exports.parkCreate = function parkCreate(_ref2) {
  var name = _ref2.name,
      phone = _ref2.phone,
      shift = _ref2.shift;

  var _firebase$auth = _firebase2.default.auth(),
      currentUser = _firebase$auth.currentUser;

  return function (dispatch) {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/parks').push({ name: name, phone: phone, shift: shift }).then(function () {
      dispatch({ type: _types.PARK_CHECK_IN_CREATE });
      _reactNativeRouterFlux.Actions.parkList({ type: 'reset' });
    });
  };
};

var parksFetch = exports.parksFetch = function parksFetch() {
  var _firebase$auth2 = _firebase2.default.auth(),
      currentUser = _firebase$auth2.currentUser;

  return function (dispatch) {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/parks').on('value', function (snapshot) {
      dispatch({ type: _types.PARKS_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

var parkSave = exports.parkSave = function parkSave(_ref3) {
  var name = _ref3.name,
      phone = _ref3.phone,
      shift = _ref3.shift,
      uid = _ref3.uid;

  var _firebase$auth3 = _firebase2.default.auth(),
      currentUser = _firebase$auth3.currentUser;

  return function (dispatch) {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/parks/' + uid).set({ name: name, phone: phone, shift: shift }).then(function () {
      dispatch({ type: _types.PARK_CHECK_IN_SAVE_SUCCESS });
      _reactNativeRouterFlux.Actions.parkList({ type: 'reset' });
    });
  };
};

var parkDelete = exports.parkDelete = function parkDelete(_ref4) {
  var uid = _ref4.uid;

  var _firebase$auth4 = _firebase2.default.auth(),
      currentUser = _firebase$auth4.currentUser;

  return function () {
    _firebase2.default.database().ref('/users/' + currentUser.uid + '/parks/' + uid).remove().then(function () {
      _reactNativeRouterFlux.Actions.parkList({ type: 'reset' });
    });
  };
};