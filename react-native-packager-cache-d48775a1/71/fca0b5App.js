Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = babelHelpers.interopRequireDefault(_reduxThunk);

var _reducers = require('./src/reducers');

var _reducers2 = babelHelpers.interopRequireDefault(_reducers);

var _Router = require('./src/Router');

var _Router2 = babelHelpers.interopRequireDefault(_Router);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.reloadReducer(), __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        _react2.default.createElement(_Router2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;


var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
var nextRootReducer = require('./src/reducers/index');