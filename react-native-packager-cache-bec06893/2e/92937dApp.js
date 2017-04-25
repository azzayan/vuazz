Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/az/dev/projects/vuazz/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _Header = require('./src/components/Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _LoginForm = require('./src/components/LoginForm');

var _LoginForm2 = babelHelpers.interopRequireDefault(_LoginForm);

var App = function (_Component) {
  babelHelpers.inherits(App, _Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _firebase2.default.initializeApp({
        apiKey: 'AIzaSyBvNybWuCqTS8by01nZ3k_FoyiD0M3yjuU',
        authDomain: 'vuazz-159200.firebaseapp.com',
        databaseURL: 'https://vuazz-159200.firebaseio.com',
        projectId: 'vuazz-159200',
        storageBucket: 'vuazz-159200.appspot.com',
        messagingSenderId: '380754719060'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        _react2.default.createElement(_Header2.default, { headerText: 'Authentication', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }),
        _react2.default.createElement(_LoginForm2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        })
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;