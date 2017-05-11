Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/ParkListItem.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var ParkListItem = function ParkListItem(_ref) {
  var park = _ref.park;
  var name = park.name,
      designation = park.designation,
      states = park.states;
  var headerContentStyle = styles.headerContentStyle,
      headerTextStyle = styles.headerTextStyle;


  return _react2.default.createElement(
    _nativeBase.Card,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    _react2.default.createElement(
      _nativeBase.CardItem,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      _react2.default.createElement(
        _nativeBase.Body,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        _react2.default.createElement(
          _nativeBase.Text,
          { style: headerTextStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          name
        ),
        _react2.default.createElement(
          _nativeBase.Text,
          { style: headerContentStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          designation
        ),
        _react2.default.createElement(
          _nativeBase.Text,
          { style: headerContentStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
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

exports.default = ParkListItem;