Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NativeGroup = undefined;

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-svg/elements/G.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var _props = require('../lib/props');

var _attributes = require('../lib/attributes');

var G = (_temp2 = _class = function (_Shape) {
    babelHelpers.inherits(G, _Shape);

    function G() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, G);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = G.__proto__ || Object.getPrototypeOf(G)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(G, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;


            return _react2.default.createElement(
                RNSVGGroup,
                babelHelpers.extends({}, this.extractProps(props), {
                    ref: function ref(ele) {
                        _this2.root = ele;
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }),
                props.children
            );
        }
    }]);
    return G;
}(_Shape3.default), _class.displayName = 'G', _class.propTypes = _props.transformProps, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGGroup = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.GroupAttributes,
    uiViewClassName: 'RNSVGGroup'
});

exports.default = G;
exports.NativeGroup = RNSVGGroup;