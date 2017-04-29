Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/Spinner.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Spinner = function Spinner(_ref) {
  var size = _ref.size;

  return _react2.default.createElement(
    _reactNative.View,
    { style: styles.spinnerStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(_reactNative.ActivityIndicator, { size: size || 'large', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    })
  );
};

var styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

exports.default = Spinner;