Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/AlbumDetail.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Card = require('./Card');

var _Card2 = babelHelpers.interopRequireDefault(_Card);

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var AlbumDetail = function AlbumDetail(props) {
  return _react2.default.createElement(
    _Card2.default,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    _react2.default.createElement(
      _CardSection2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      _react2.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        props.album.title
      )
    )
  );
};

exports.default = AlbumDetail;