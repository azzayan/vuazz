Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeeUpdate = undefined;

var _types = require('./types');

var employeeUpdate = exports.employeeUpdate = function employeeUpdate(_ref) {
  var prop = _ref.prop,
      value = _ref.value;

  return {
    type: _types.EMPLOYEE_UPDATE,
    payload: { prop: prop, value: value }
  };
};