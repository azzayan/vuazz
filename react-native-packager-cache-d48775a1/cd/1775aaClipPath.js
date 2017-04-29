Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-svg/elements/ClipPath.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var ClipPath = (_temp = _class = function (_Component) {
    babelHelpers.inherits(ClipPath, _Component);

    function ClipPath() {
        babelHelpers.classCallCheck(this, ClipPath);
        return babelHelpers.possibleConstructorReturn(this, (ClipPath.__proto__ || Object.getPrototypeOf(ClipPath)).apply(this, arguments));
    }

    babelHelpers.createClass(ClipPath, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                RNSVGClipPath,
                {
                    name: this.props.id,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                },
                this.props.children
            );
        }
    }]);
    return ClipPath;
}(_react.Component), _class.displayName = 'ClipPath', _class.propTypes = {
    id: _react.PropTypes.string.isRequired
}, _temp);


var RNSVGClipPath = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.ClipPathAttributes,
    uiViewClassName: 'RNSVGClipPath'
});

exports.default = ClipPath;