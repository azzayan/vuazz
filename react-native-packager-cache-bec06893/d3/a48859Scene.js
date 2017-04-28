Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _default = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(_default, _React$Component);

  function _default() {
    babelHelpers.classCallCheck(this, _default);
    return babelHelpers.possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  babelHelpers.createClass(_default, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return _default;
}(_react2.default.Component), _class.propTypes = {
  tabBarStyle: _reactNative.View.propTypes.style,
  tabBarSelectedItemStyle: _reactNative.View.propTypes.style,
  tabBarIconContainerStyle: _reactNative.View.propTypes.style,
  tabBarShadowStyle: _reactNative.View.propTypes.style,
  tabSceneStyle: _reactNative.View.propTypes.style,
  tabStyle: _reactNative.View.propTypes.style,
  tabTitleStyle: _reactNative.Text.propTypes.style,
  tabSelectedTitleStyle: _reactNative.Text.propTypes.style,
  tabTitle: _react.PropTypes.string
}, _temp);

exports.default = _default;