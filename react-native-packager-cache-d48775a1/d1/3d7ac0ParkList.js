Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/home/az/dev/projects/vuazz-mobile/src/components/ParkList.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _reactNativeRouterFlux = require("react-native-router-flux");

var _ParkListItem = require("./ParkListItem");

var _ParkListItem2 = babelHelpers.interopRequireDefault(_ParkListItem);

var ParkList = function (_Component) {
    babelHelpers.inherits(ParkList, _Component);

    function ParkList() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, ParkList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = ParkList.__proto__ || Object.getPrototypeOf(ParkList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { parks: [] }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(ParkList, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            var AZsPARKS = "ever,voya,shen,grca,hosp,acad,gumo,bibe,cave,romo,dena,badl,wica,glca,hosp,jazz,gett,inde,gwmp,coga,linc,nama,vive,wamo,whho,wwii";
            var API_KEY = "C127CF67-F403-4823-AA42-B87B1E235D23";

            fetch("https://developer.nps.gov/api/v0/parks?parkCode=" + AZsPARKS, {
                method: "GET",
                headers: {
                    "Authorization": API_KEY
                }
            }).then(function (response) {
                return response.json();
            }).then(function (responseData) {
                return _this2.setState({
                    parks: responseData.data
                });
            }).catch(function (error) {
                console.log("There has been a problem with your fetch operation:", error.message);
            });
        }
    }, {
        key: "renderParks",
        value: function renderParks() {
            return this.state.parks.map(function (park) {
                return _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { key: park.id, park: park, onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.parkOverview({ park: park });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    },
                    _react2.default.createElement(_ParkListItem2.default, { key: park.id, park: park, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        }
                    })
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _nativeBase.Container,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                },
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.searchPage();
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        "Temporary link to Search Page"
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.Content,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    },
                    this.renderParks()
                )
            );
        }
    }]);
    return ParkList;
}(_react.Component);

exports.default = ParkList;