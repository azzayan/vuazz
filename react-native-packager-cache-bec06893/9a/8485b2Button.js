Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/Button.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Button = function Button(_ref) {
  var onPress = _ref.onPress,
      children = _ref.children;
  var buttonStyle = styles.buttonStyle,
      textStyle = styles.textStyle;


  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    { onPress: onPress, style: buttonStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    _react2.default.createElement(
      _reactNative.Text,
      { style: textStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      children
    )
  );
};

var styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

exports.default = Button;