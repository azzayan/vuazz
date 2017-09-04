Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/home/az/dev/projects/vuazz-mobile/src/components/ParkList.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _reactNativeSearchFilter = require("react-native-search-filter");

var _reactNativeSearchFilter2 = babelHelpers.interopRequireDefault(_reactNativeSearchFilter);

var _reactNativeRouterFlux = require("react-native-router-flux");

var _ParkListItem = require("./ParkListItem");

var _ParkListItem2 = babelHelpers.interopRequireDefault(_ParkListItem);

var KEYS_TO_FILTERS = ["fullName"];
var styles = {
    searchBoxStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
};
var searchBoxStyle = styles.searchBoxStyle;

var ParkList = function (_Component) {
    babelHelpers.inherits(ParkList, _Component);

    function ParkList() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, ParkList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = ParkList.__proto__ || Object.getPrototypeOf(ParkList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { parks: [], searchTerm: "", filteredParks: [] }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(ParkList, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            var LIMIT = 600;
            var API_KEY = "C127CF67-F403-4823-AA42-B87B1E235D23";

            fetch("https://developer.nps.gov/api/v0/parks?limit=" + LIMIT, {
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
        key: "searchUpdated",
        value: function searchUpdated(term) {
            this.setState({ searchTerm: term });
        }
    }, {
        key: "renderParks",
        value: function renderParks() {
            return this.state.filteredParks.map(function (park) {
                return _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { key: park.id, park: park,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.parkOverview({ park: park });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    },
                    _react2.default.createElement(_ParkListItem2.default, { key: park.id, park: park, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    })
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            this.state.filteredParks = this.state.parks.filter((0, _reactNativeSearchFilter.createFilter)(this.state.searchTerm, KEYS_TO_FILTERS));

            return _react2.default.createElement(
                _nativeBase.Container,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                },
                _react2.default.createElement(
                    _nativeBase.Item,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: "ios-search", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    }),
                    _react2.default.createElement(_reactNativeSearchFilter2.default, { style: searchBoxStyle, placeholder: "Search...", onChangeText: function onChangeText(term) {
                            _this3.searchUpdated(term);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    })
                ),
                _react2.default.createElement(
                    _nativeBase.Content,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
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