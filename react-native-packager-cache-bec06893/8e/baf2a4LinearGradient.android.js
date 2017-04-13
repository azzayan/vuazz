'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/expo/src/LinearGradient.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var LinearGradient = (_temp = _class = function (_Component) {
  babelHelpers.inherits(LinearGradient, _Component);

  function LinearGradient() {
    babelHelpers.classCallCheck(this, LinearGradient);
    return babelHelpers.possibleConstructorReturn(this, (LinearGradient.__proto__ || Object.getPrototypeOf(LinearGradient)).apply(this, arguments));
  }

  babelHelpers.createClass(LinearGradient, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          colors = _props.colors,
          end = _props.end,
          locations = _props.locations,
          start = _props.start,
          style = _props.style,
          otherProps = babelHelpers.objectWithoutProperties(_props, ['children', 'colors', 'end', 'locations', 'start', 'style']);


      if (colors && locations && colors.length !== locations.length) {
        console.warn('LinearGradient colors and locations props should be arrays of the same length');
      }

      var flatStyle = _reactNative.StyleSheet.flatten(style) || {};
      var borderRadius = flatStyle.borderRadius || 0;

      var borderRadiiPerCorner = [flatStyle.borderTopLeftRadius || borderRadius, flatStyle.borderTopLeftRadius || borderRadius, flatStyle.borderTopRightRadius || borderRadius, flatStyle.borderTopRightRadius || borderRadius, flatStyle.borderBottomRightRadius || borderRadius, flatStyle.borderBottomRightRadius || borderRadius, flatStyle.borderBottomLeftRadius || borderRadius, flatStyle.borderBottomLeftRadius || borderRadius];

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, otherProps, { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }),
        _react2.default.createElement(NativeLinearGradient, {
          style: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
          colors: colors.map(_reactNative.processColor),
          start: start,
          end: end,
          locations: locations ? locations.slice(0, colors.length) : null,
          borderRadii: borderRadiiPerCorner,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }),
        children
      );
    }
  }]);
  return LinearGradient;
}(_react.Component), _class.propTypes = babelHelpers.extends({
  start: _react.PropTypes.arrayOf(_react.PropTypes.number),
  end: _react.PropTypes.arrayOf(_react.PropTypes.number),
  colors: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  locations: _react.PropTypes.arrayOf(_react.PropTypes.number)
}, _reactNative.View.propTypes), _temp);
exports.default = LinearGradient;


var NativeLinearGradient = (0, _reactNative.requireNativeComponent)('ExponentLinearGradient', null);