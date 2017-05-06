Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/Card.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Card = function Card(props) {
  return _react2.default.createElement(
    _reactNative.View,
    { style: styles.containerStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    props.children
  );
};

var styles = {
  containerStyle: {
    borderWidth: 1.5,
    borderRadius: 2,
    borderColor: '#6AC700',
    borderBottomWidth: 1.5,
    shadowColor: '#6AC700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

exports.default = Card;