Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/Header.js';

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
        lineNumber: 10
      }
    },
    _react2.default.createElement(
      _reactNative.Text,
      { style: textStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      props.headerText
    )
  );
};

var styles = {
  viewStyle: {
    backgroundColor: '#6E1100',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    marginTop: 9,
    marginBottom: 5,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  }
};

exports.default = Header;