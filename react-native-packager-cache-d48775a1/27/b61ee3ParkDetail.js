Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/ParkDetail.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Card = require('./Card');

var _Card2 = babelHelpers.interopRequireDefault(_Card);

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var _Button = require('./Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var ParkDetail = function ParkDetail(_ref) {
  var park = _ref.park;
  var name = park.name,
      designation = park.designation,
      states = park.states;
  var headerContentStyle = styles.headerContentStyle,
      headerTextStyle = styles.headerTextStyle;


  return _react2.default.createElement(
    _Card2.default,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    _react2.default.createElement(
      _CardSection2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        { style: headerContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: headerTextStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          name
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          designation
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          'State(s): ',
          states
        )
      )
    )
  );
};

var styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

exports.default = ParkDetail;