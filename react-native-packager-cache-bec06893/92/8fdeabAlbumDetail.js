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

var _Button = require('./Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var AlbumDetail = function AlbumDetail(_ref) {
  var album = _ref.album;
  var title = album.title,
      artist = album.artist,
      thumbnail_image = album.thumbnail_image,
      image = album.image,
      url = album.url;
  var thumbnailStyle = styles.thumbnailStyle,
      headerContentStyle = styles.headerContentStyle,
      thumbnailContainerStyle = styles.thumbnailContainerStyle,
      headerTextStyle = styles.headerTextStyle,
      imageStyle = styles.imageStyle;


  return _react2.default.createElement(
    _Card2.default,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    _react2.default.createElement(
      _CardSection2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        { style: thumbnailContainerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(_reactNative.Image, { style: thumbnailStyle, source: { uri: thumbnail_image }, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        })
      ),
      _react2.default.createElement(
        _reactNative.View,
        { style: headerContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: headerTextStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          title
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          artist
        )
      )
    ),
    _react2.default.createElement(
      _CardSection2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      },
      _react2.default.createElement(_reactNative.Image, { source: { uri: image }, style: imageStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })
    ),
    _react2.default.createElement(
      _CardSection2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      },
      _react2.default.createElement(
        _Button2.default,
        { onPress: function onPress() {
            return _reactNative.Linking.openURL(url);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        'Buy Now'
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
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

exports.default = AlbumDetail;