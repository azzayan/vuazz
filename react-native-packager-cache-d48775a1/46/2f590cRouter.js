Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/home/az/dev/projects/vuazz-mobile/src/Router.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require("react-native-router-flux");

var _LoginForm = require("./components/LoginForm");

var _LoginForm2 = babelHelpers.interopRequireDefault(_LoginForm);

var _ParkList = require("./components/ParkList");

var _ParkList2 = babelHelpers.interopRequireDefault(_ParkList);

var _ParkOverviewMain = require("./components/ParkOverviewMain");

var _ParkOverviewMain2 = babelHelpers.interopRequireDefault(_ParkOverviewMain);

var _SearchList = require("./components/SearchList");

var _SearchList2 = babelHelpers.interopRequireDefault(_SearchList);

var RouterComponent = function RouterComponent() {
    var routerStyle = styles.routerStyle;


    return _react2.default.createElement(
        _reactNativeRouterFlux.Router,
        { sceneStyle: routerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        },
        _react2.default.createElement(
            _reactNativeRouterFlux.Scene,
            { key: "auth", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            },
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "login", component: _LoginForm2.default, title: "Sign Up / Log In", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            })
        ),
        _react2.default.createElement(
            _reactNativeRouterFlux.Scene,
            { key: "main", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            },
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "parkList", component: _ParkList2.default, title: "National Park Units", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }),
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "parkOverview", component: _ParkOverviewMain2.default, title: "Park Overview", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }),
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "searchList", component: _SearchList2.default, title: "Search for a Park!", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            })
        )
    );
};

var styles = {
    routerStyle: {
        paddingTop: 65
    }
};

exports.default = RouterComponent;