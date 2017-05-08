Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FadeIn = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/@shoutem/animation/src/animations/FadeIn.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _DriverShape = require('../drivers/DriverShape');

var FadeIn = exports.FadeIn = (_temp = _class = function (_Component) {
  babelHelpers.inherits(FadeIn, _Component);

  function FadeIn() {
    babelHelpers.classCallCheck(this, FadeIn);
    return babelHelpers.possibleConstructorReturn(this, (FadeIn.__proto__ || Object.getPrototypeOf(FadeIn)).apply(this, arguments));
  }

  babelHelpers.createClass(FadeIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          driver = _props.driver,
          children = _props.children,
          _props$inputRange = _props.inputRange,
          inputRange = _props$inputRange === undefined ? [0, 1] : _props$inputRange,
          style = _props.style;


      return _react2.default.createElement(
        _reactNative.Animated.View,
        {
          style: [style, {
            opacity: driver.value.interpolate({
              inputRange: inputRange,
              outputRange: [0, 1],
              extrapolate: 'clamp'
            })
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        children
      );
    }
  }]);
  return FadeIn;
}(_react.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react2.default.PropTypes.node,

  inputRange: _react2.default.PropTypes.array
}, _temp);