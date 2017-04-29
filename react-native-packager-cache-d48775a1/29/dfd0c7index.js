Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _AuthReducer = require('./AuthReducer');

var _AuthReducer2 = babelHelpers.interopRequireDefault(_AuthReducer);

var _EmployeeFormReducer = require('./EmployeeFormReducer');

var _EmployeeFormReducer2 = babelHelpers.interopRequireDefault(_EmployeeFormReducer);

var _EmployeeReducer = require('./EmployeeReducer');

var _EmployeeReducer2 = babelHelpers.interopRequireDefault(_EmployeeReducer);

exports.default = (0, _redux.combineReducers)({
  auth: _AuthReducer2.default,
  employeeForm: _EmployeeFormReducer2.default,
  employees: _EmployeeReducer2.default
});