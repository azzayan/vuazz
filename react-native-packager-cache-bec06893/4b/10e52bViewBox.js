Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alignEnum = exports.meetOrSliceTypes = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-svg/elements/ViewBox.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _G = require('./G');

var _G2 = babelHelpers.interopRequireDefault(_G);

var meetOrSliceTypes = {
    meet: 0,
    slice: 1,
    none: 2
};

var alignEnum = ['xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax', 'none'].reduce(function (prev, name) {
    prev[name] = name;
    return prev;
}, {});

var numberRegExp = /^\d*\.?\d*%?$/;
var spacesRegExp = /\s+/;

var ViewBox = (_temp = _class = function (_Component) {
    babelHelpers.inherits(ViewBox, _Component);

    function ViewBox() {
        babelHelpers.classCallCheck(this, ViewBox);
        return babelHelpers.possibleConstructorReturn(this, (ViewBox.__proto__ || Object.getPrototypeOf(ViewBox)).apply(this, arguments));
    }

    babelHelpers.createClass(ViewBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                viewBox = _props.viewBox,
                preserveAspectRatio = _props.preserveAspectRatio,
                name = _props.name;


            var params = viewBox.trim().split(spacesRegExp);

            if (params.length !== 4 || !params.some(function (param) {
                return param && numberRegExp.test(param);
            })) {
                console.warn('`viewBox` expected a string like `minX minY width height`, but got:' + viewBox);
                return _react2.default.createElement(
                    _G2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    this.props.children
                );
            }

            var modes = preserveAspectRatio.trim().split(spacesRegExp);

            var meetOrSlice = meetOrSliceTypes[modes[1]] || 0;
            var align = alignEnum[modes[0]] || 'xMidYMid';

            return _react2.default.createElement(
                RNSVGViewBox,
                {
                    name: name,
                    minX: params[0],
                    minY: params[1],
                    vbWidth: params[2],
                    vbHeight: params[3],
                    align: align,
                    meetOrSlice: meetOrSlice,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                },
                this.props.children
            );
        }
    }]);
    return ViewBox;
}(_react.Component), _class.displayName = 'ViewBox', _class.propTypes = {
    viewBox: _react.PropTypes.string.isRequired,
    preserveAspectRatio: _react.PropTypes.string
}, _class.defaultProps = {
    preserveAspectRatio: 'xMidYMid meet'
}, _temp);


var RNSVGViewBox = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.ViewBoxAttributes,
    uiViewClassName: 'RNSVGViewBox'
});

exports.default = ViewBox;
exports.meetOrSliceTypes = meetOrSliceTypes;
exports.alignEnum = alignEnum;