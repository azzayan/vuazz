Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/Router.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _LoginForm = require('./components/LoginForm');

var _LoginForm2 = babelHelpers.interopRequireDefault(_LoginForm);

var _EmployeeList = require('./components/EmployeeList');

var _EmployeeList2 = babelHelpers.interopRequireDefault(_EmployeeList);

var _EmployeeCreate = require('./components/EmployeeCreate');

var _EmployeeCreate2 = babelHelpers.interopRequireDefault(_EmployeeCreate);

var _EmployeeEdit = require('./components/EmployeeEdit');

var _EmployeeEdit2 = babelHelpers.interopRequireDefault(_EmployeeEdit);

var RouterComponent = function RouterComponent() {
  return _react2.default.createElement(
    _reactNativeRouterFlux.Router,
    { sceneStyle: { paddingTop: 65 }, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    _react2.default.createElement(
      _reactNativeRouterFlux.Scene,
      { key: 'auth', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'login', component: _LoginForm2.default, title: 'Please Log In', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })
    ),
    _react2.default.createElement(
      _reactNativeRouterFlux.Scene,
      { key: 'main', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      _react2.default.createElement(_reactNativeRouterFlux.Scene, {
        onRight: function onRight() {
          return _reactNativeRouterFlux.Actions.employeeCreate();
        },
        rightTitle: 'Add',
        key: 'employeeList',
        component: _EmployeeList2.default,
        title: 'Employees',
        initial: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }),
      _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'employeeCreate', component: _EmployeeCreate2.default, title: 'Create Employee', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }),
      _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'employeeEdit', component: _EmployeeEdit2.default, title: 'Edit Employee', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })
    )
  );
};

exports.default = RouterComponent;