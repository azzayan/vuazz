Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomOut = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/@shoutem/animation/src/animations/ZoomOut.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _DriverShape = require('../drivers/DriverShape');

var ZoomOut = exports.ZoomOut = (_temp = _class = function (_Component) {
  babelHelpers.inherits(ZoomOut, _Component);

  function ZoomOut() {
    babelHelpers.classCallCheck(this, ZoomOut);
    return babelHelpers.possibleConstructorReturn(this, (ZoomOut.__proto__ || Object.getPrototypeOf(ZoomOut)).apply(this, arguments));
  }

  babelHelpers.createClass(ZoomOut, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          driver = _props.driver,
          children = _props.children,
          _props$inputRange = _props.inputRange,
          inputRange = _props$inputRange === undefined ? [0, 1] : _props$inputRange,
          _props$maxFactor = _props.maxFactor,
          maxFactor = _props$maxFactor === undefined ? 1.5 : _props$maxFactor,
          style = _props.style;


      return _react2.default.createElement(
        _reactNative.Animated.View,
        {
          style: [style, {
            transform: [{
              scale: driver.value.interpolate({
                inputRange: inputRange,
                outputRange: [maxFactor, 1],
                extrapolateRight: 'clamp'
              })
            }]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        children
      );
    }
  }]);
  return ZoomOut;
}(_react.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react2.default.PropTypes.node,

  inputRange: _react2.default.PropTypes.array,

  maxFactor: _react2.default.PropTypes.number,
  style: _react2.default.PropTypes.object
}, _temp);