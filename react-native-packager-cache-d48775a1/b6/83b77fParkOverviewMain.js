Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/home/az/dev/projects/vuazz-mobile/src/components/ParkOverviewMain.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var ParkOverviewMain = function ParkOverviewMain(_ref) {
    var park = _ref.park;
    var fullName = park.fullName,
        description = park.description,
        states = park.states,
        url = park.url,
        weatherInfo = park.weatherInfo;
    var headerContentStyle = styles.headerContentStyle,
        headerTextStyle = styles.headerTextStyle,
        subHeaderTextStyle = styles.subHeaderTextStyle,
        subHeaderTitleContainerStyle = styles.subHeaderTitleContainerStyle,
        descriptionContainerStyle = styles.descriptionContainerStyle,
        checkInButtonStyle = styles.checkInButtonStyle,
        urlButtonStyle = styles.urlButtonStyle,
        buttonTextStyle = styles.buttonTextStyle;


    return _react2.default.createElement(
        _nativeBase.Container,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        },
        _react2.default.createElement(
            _nativeBase.Content,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            },
            _react2.default.createElement(
                _nativeBase.Body,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: headerTextStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    fullName
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: headerContentStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    "State(s): ",
                    states
                )
            ),
            _react2.default.createElement(
                _nativeBase.Button,
                { block: true, success: true, style: checkInButtonStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: buttonTextStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        }
                    },
                    "CHECK IN!"
                )
            ),
            _react2.default.createElement(
                _nativeBase.Card,
                { style: descriptionContainerStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                _react2.default.createElement(
                    _nativeBase.CardItem,
                    { style: subHeaderTitleContainerStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: subHeaderTextStyle, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            }
                        },
                        "Description"
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.CardItem,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            }
                        },
                        description
                    )
                )
            ),
            _react2.default.createElement(
                _nativeBase.Card,
                { style: { flex: 0 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                },
                _react2.default.createElement(
                    _nativeBase.CardItem,
                    { style: subHeaderTitleContainerStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: subHeaderTextStyle, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        "Weather"
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.CardItem,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            }
                        },
                        weatherInfo
                    )
                )
            ),
            _react2.default.createElement(
                _nativeBase.Button,
                { block: true, style: urlButtonStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: buttonTextStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    "Visit this park's official NPS page"
                )
            )
        )
    );
};

var styles = {
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: 16
    },
    headerTextStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: 18,
        fontWeight: "bold"
    },
    subHeaderTextStyle: {
        fontSize: 14,
        fontWeight: "bold"
    },
    subHeaderTitleContainerStyle: {
        marginTop: 0,
        marginBottom: -14
    },
    descriptionContainerStyle: {
        marginTop: 20,
        flex: 0
    },
    buttonTextStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: 14,
        fontWeight: "bold",
        color: "white"
    },
    checkInButtonStyle: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20
    },
    urlButtonStyle: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        marginBottom: 20
    }
};

exports.default = ParkOverviewMain;