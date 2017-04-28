Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _LibraryReducer = require('./LibraryReducer');

var _LibraryReducer2 = babelHelpers.interopRequireDefault(_LibraryReducer);

var _SelectionReducer = require('./SelectionReducer');

var _SelectionReducer2 = babelHelpers.interopRequireDefault(_SelectionReducer);

var _AuthReducer = require('./AuthReducer');

var _AuthReducer2 = babelHelpers.interopRequireDefault(_AuthReducer);

var _EmployeeFormReducer = require('./EmployeeFormReducer');

var _EmployeeFormReducer2 = babelHelpers.interopRequireDefault(_EmployeeFormReducer);

exports.default = (0, _redux.combineReducers)({
  libraries: _LibraryReducer2.default,
  selectedLibraryId: _SelectionReducer2.default,
  auth: _AuthReducer2.default,
  employeeForm: _EmployeeFormReducer2.default
});