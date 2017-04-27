Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/az/dev/projects/vuazz/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _reducers = require('./src/reducers');

var _reducers2 = babelHelpers.interopRequireDefault(_reducers);

var _LoginForm = require('./src/components/LoginForm');

var _LoginForm2 = babelHelpers.interopRequireDefault(_LoginForm);

var _Button = require('./src/components/Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var _Spinner = require('./src/components/Spinner');

var _Spinner2 = babelHelpers.interopRequireDefault(_Spinner);

var App = function (_Component) {
  babelHelpers.inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loggedIn: null }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _firebase2.default.initializeApp({
        apiKey: 'AIzaSyBvNybWuCqTS8by01nZ3k_FoyiD0M3yjuU',
        authDomain: 'vuazz-159200.firebaseapp.com',
        databaseURL: 'https://vuazz-159200.firebaseio.com',
        projectId: 'vuazz-159200',
        storageBucket: 'vuazz-159200.appspot.com',
        messagingSenderId: '380754719060'
      });

      _firebase2.default.auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.setState({ loggedIn: true });
        } else {
          _this2.setState({ loggedIn: false });
        }
      });
    }
  }, {
    key: 'reloadReducer',
    value: function reloadReducer() {
      if (module.hot) {
        module.hot.accept('./src/reducers', function () {
          store.replaceReducer(nextRootReducer);
        });
      }

      return store;
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return _react2.default.createElement(
            _Button2.default,
            { onPress: function onPress() {
                return _firebase2.default.auth().signOut();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            'Log Out'
          );
        case false:
          return _react2.default.createElement(_LoginForm2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          });
        default:
          return _react2.default.createElement(_Spinner2.default, { size: 'large', __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.reloadReducer(), __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        },
        _react2.default.createElement(_LoginForm2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        })
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;


var store = (0, _redux.createStore)(_reducers2.default);
var nextRootReducer = require('./src/reducers/index');