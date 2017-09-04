Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/home/az/dev/projects/vuazz-mobile/src/components/ParkListItem.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require("native-base");

var ParkListItem = function ParkListItem(_ref) {
    var park = _ref.park;
    var fullName = park.fullName;
    var headerTextStyle = styles.headerTextStyle;


    return _react2.default.createElement(
        _nativeBase.CardItem,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        },
        _react2.default.createElement(
            _nativeBase.Text,
            { style: headerTextStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            fullName
        )
    );
};

var styles = {
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
};

exports.default = ParkListItem;