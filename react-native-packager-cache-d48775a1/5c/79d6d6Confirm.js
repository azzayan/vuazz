Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/Confirm.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var _Button = require('./Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var Confirm = function Confirm(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      onAccept = _ref.onAccept,
      onDecline = _ref.onDecline;
  var containerStyle = styles.containerStyle,
      textStyle = styles.textStyle,
      cardSectionStyle = styles.cardSectionStyle;


  return _react2.default.createElement(
    _reactNative.Modal,
    {
      visible: visible,
      transparent: true,
      animationType: 'slide',
      onRequestClose: function onRequestClose() {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    _react2.default.createElement(
      _reactNative.View,
      { style: containerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      _react2.default.createElement(
        _CardSection2.default,
        { style: cardSectionStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: textStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          children
        )
      ),
      _react2.default.createElement(
        _CardSection2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        _react2.default.createElement(
          _Button2.default,
          { onPress: onAccept, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          'Yes'
        ),
        _react2.default.createElement(
          _Button2.default,
          { onPress: onDecline, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          'No'
        )
      )
    )
  );
};

var styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

exports.default = Confirm;