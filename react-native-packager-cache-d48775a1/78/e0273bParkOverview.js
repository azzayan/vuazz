Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/ParkOverview.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _nativeBase = require('native-base');

var ParkOverview = function ParkOverview(_ref) {
  var park = _ref.park;
  var fullName = park.fullName,
      description = park.description,
      states = park.states,
      url = park.url,
      weatherInfo = park.weatherInfo;


  return _react2.default.createElement(
    _nativeBase.Container,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    _react2.default.createElement(
      _nativeBase.Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      _react2.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        fullName
      ),
      _react2.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'State(s): ',
        states
      ),
      _react2.default.createElement(
        _nativeBase.Card,
        { style: { flex: 0 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        _react2.default.createElement(
          _nativeBase.CardItem,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              description
            ),
            _react2.default.createElement(
              _nativeBase.Button,
              { onPress: function onPress() {
                  return _reactNative.Linking.openURL(url);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              _react2.default.createElement(
                _reactNative.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  }
                },
                'Visit NPS page'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = ParkOverview;