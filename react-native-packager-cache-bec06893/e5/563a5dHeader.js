Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/common/Header.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Header = function Header(props) {
  var textStyle = styles.textStyle,
      viewStyle = styles.viewStyle;


  return _react2.default.createElement(
    _reactNative.View,
    { style: viewStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    _react2.default.createElement(
      _reactNative.Text,
      { style: textStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      props.headerText
    )
  );
};

var styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

exports.default = Header;