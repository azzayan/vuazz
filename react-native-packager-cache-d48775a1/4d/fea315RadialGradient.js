Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-svg/elements/RadialGradient.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _props = require('../lib/props');

var _Gradient2 = require('./Gradient');

var _Gradient3 = babelHelpers.interopRequireDefault(_Gradient2);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var RadialGradient = (_temp = _class = function (_Gradient) {
    babelHelpers.inherits(RadialGradient, _Gradient);

    function RadialGradient() {
        babelHelpers.classCallCheck(this, RadialGradient);
        return babelHelpers.possibleConstructorReturn(this, (RadialGradient.__proto__ || Object.getPrototypeOf(RadialGradient)).apply(this, arguments));
    }

    babelHelpers.createClass(RadialGradient, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            return _react2.default.createElement(RNSVGRadialGradient, {
                fx: props.fx.toString(),
                fy: props.fy.toString(),
                rx: (props.rx || props.r).toString(),
                ry: (props.ry || props.r).toString(),
                cx: props.cx.toString(),
                cy: props.cy.toString(),
                gradient: this.getGradient(),
                name: props.id,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            });
        }
    }]);
    return RadialGradient;
}(_Gradient3.default), _class.displayName = 'RadialGradient', _class.propTypes = {
    fx: _props.numberProp.isRequired,
    fy: _props.numberProp.isRequired,
    rx: _props.numberProp,
    ry: _props.numberProp,
    cx: _props.numberProp.isRequired,
    cy: _props.numberProp.isRequired,
    r: _props.numberProp,
    id: _react.PropTypes.string.isRequired
}, _class.defaultProps = {
    fx: '50%',
    fy: '50%',
    cx: '50%',
    cy: '50%',
    r: '50%'
}, _temp);


var RNSVGRadialGradient = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.RadialGradientAttributes,
    uiViewClassName: 'RNSVGRadialGradient'
});

exports.default = RadialGradient;