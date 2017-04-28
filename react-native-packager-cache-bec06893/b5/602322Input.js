Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/Input.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onChangeText = _ref.onChangeText,
      placeholder = _ref.placeholder,
      secureTextEntry = _ref.secureTextEntry;
  var inputStyle = styles.inputStyle,
      labelStyle = styles.labelStyle,
      containerStyle = styles.containerStyle;


  return _react2.default.createElement(
    _reactNative.View,
    { style: containerStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    _react2.default.createElement(
      _reactNative.Text,
      { style: labelStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      label
    ),
    _react2.default.createElement(_reactNative.TextInput, {
      secureTextEntry: secureTextEntry,
      placeholder: placeholder,
      autoCorrect: false,
      style: inputStyle,
      value: value,
      onChangeText: onChangeText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    })
  );
};

var styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

exports.default = Input;