Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/Header.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Header = function Header(props) {
  return _react2.default.createElement(
    _reactNative.View,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(
      _reactNative.Text,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      props.headerText
    )
  );
};

exports.Header = Header;