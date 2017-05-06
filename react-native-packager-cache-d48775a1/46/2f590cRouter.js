Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/Router.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _LoginForm = require('./components/LoginForm');

var _LoginForm2 = babelHelpers.interopRequireDefault(_LoginForm);

var _ParkList = require('./components/ParkList');

var _ParkList2 = babelHelpers.interopRequireDefault(_ParkList);

var RouterComponent = function RouterComponent() {
  var headerBarStyle = styles.headerBarStyle,
      titleStyle = styles.titleStyle,
      routerStyle = styles.routerStyle;


  return _react2.default.createElement(
    _reactNativeRouterFlux.Router,
    { headerBarStyle: headerBarStyle, titleStyle: titleStyle, sceneStyle: routerStyle, __source: {
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
      _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'login', component: _LoginForm2.default, title: 'Sign Up / Log In', __source: {
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
      _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'parkList', component: _ParkList2.default, title: 'National Park Units', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    )
  );
};

var styles = {
  routerStyle: {
    paddingTop: 65
  },
  headerBarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  titleStyle: {
    marginTop: 19,
    marginBottom: 5,
    color: 'white',
    backgroundColor: '#6E1100',
    fontSize: 22,
    fontWeight: 'bold'
  }
};

exports.default = RouterComponent;