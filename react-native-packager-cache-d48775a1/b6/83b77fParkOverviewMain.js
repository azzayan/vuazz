Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/ParkOverviewMain.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _nativeBase = require('native-base');

var ParkOverviewMain = function ParkOverviewMain(_ref) {
    var park = _ref.park;
    var fullName = park.fullName,
        description = park.description,
        states = park.states,
        url = park.url,
        weatherInfo = park.weatherInfo;
    var headerContentStyle = styles.headerContentStyle,
        headerTextStyle = styles.headerTextStyle,
        subHeaderTextStyle = styles.subHeaderTextStyle;


    return _react2.default.createElement(
        _nativeBase.Container,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        },
        _react2.default.createElement(
            _nativeBase.Content,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            _react2.default.createElement(
                _nativeBase.Body,
                {
                    __source: {
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
                    fullName
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: headerContentStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    },
                    'State(s): ',
                    states
                )
            ),
            _react2.default.createElement(
                _reactNative.Text,
                { style: subHeaderTextStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                'Description'
            ),
            _react2.default.createElement(
                _nativeBase.Card,
                { style: { flex: 0 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                },
                _react2.default.createElement(
                    _nativeBase.CardItem,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        description
                    )
                )
            ),
            _react2.default.createElement(
                _reactNative.Text,
                { style: subHeaderTextStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                },
                'Weather'
            ),
            _react2.default.createElement(
                _nativeBase.Card,
                { style: { flex: 0 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    _nativeBase.CardItem,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        },
                        weatherInfo
                    )
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
    },
    subHeaderTextStyle: {
        fontSize: 14,
        fontWeight: 'bold'
    }
};

exports.default = ParkOverviewMain;