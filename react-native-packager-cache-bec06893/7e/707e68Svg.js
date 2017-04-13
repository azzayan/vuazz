Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-svg/elements/Svg.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ViewBox = require('./ViewBox');

var _ViewBox2 = babelHelpers.interopRequireDefault(_ViewBox);

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var RNSVGSvgViewManager = _reactNative.NativeModules.RNSVGSvgViewManager;

var id = 0;

var styles = _reactNative.StyleSheet.create({
    svg: {
        backgroundColor: 'transparent'
    }
});

var Svg = (_temp = _class = function (_Component) {
    babelHelpers.inherits(Svg, _Component);

    function Svg() {
        babelHelpers.classCallCheck(this, Svg);

        var _this = babelHelpers.possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));

        _this.measureInWindow = function () {
            var _this$root;

            (_this$root = _this.root).measureInWindow.apply(_this$root, arguments);
        };

        _this.measure = function () {
            var _this$root2;

            (_this$root2 = _this.root).measure.apply(_this$root2, arguments);
        };

        _this.measureLayout = function () {
            var _this$root3;

            (_this$root3 = _this.root).measureLayout.apply(_this$root3, arguments);
        };

        _this.setNativeProps = function () {
            var _this$root4;

            (_this$root4 = _this.root).setNativeProps.apply(_this$root4, arguments);
        };

        _this.toDataURL = _reactNative.Platform.OS === 'ios' ? function () {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

            RNSVGSvgViewManager.toDataURL((0, _reactNative.findNodeHandle)(_this.root), callback);
        } : function () {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

            var node = (0, _reactNative.findNodeHandle)(_this.root);
            _this.onDataURLCallbacks.push(callback);
            _reactNative.UIManager.dispatchViewManagerCommand(node, _reactNative.UIManager.RNSVGSvgView.Commands.toDataURL, null);
        };

        _this._onDataURL = function (e) {
            while (_this.onDataURLCallbacks.length) {
                var callback = _this.onDataURLCallbacks.shift();
                callback(e.nativeEvent.base64);
            }
        };

        id++;
        _this.id = id;
        _this.onDataURLCallbacks = [];
        return _this;
    }

    babelHelpers.createClass(Svg, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var opacity = +props.opacity;
            var width = +props.width;
            var height = +props.height;
            var viewBox = props.viewBox;
            var dimensions = void 0;

            if (width && height) {
                dimensions = {
                    width: width,
                    height: height,
                    flex: 0
                };
            }

            if (props.viewbox) {
                viewBox = props.viewbox;
                console.warn('Prop `viewbox` is deprecated. please use `viewBox` instead.');
            }

            var content = viewBox ? _react2.default.createElement(
                _ViewBox2.default,
                {
                    viewBox: viewBox,
                    preserveAspectRatio: props.preserveAspectRatio,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                    }
                },
                props.children
            ) : props.children;

            var nativeProps = _lodash2.default.omit(props, ['width', 'height', 'viewBox', 'preserveAspectRatio', 'opacity']);

            return _react2.default.createElement(
                NativeSvgView,
                babelHelpers.extends({}, nativeProps, {
                    ref: function ref(ele) {
                        _this2.root = ele;
                    },
                    style: [styles.svg, props.style, !isNaN(opacity) && {
                        opacity: opacity
                    }, dimensions],
                    onDataURL: this._onDataURL,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109
                    }
                }),
                content
            );
        }
    }]);
    return Svg;
}(_react.Component), _class.displayName = 'Svg', _class.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
    opacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

    viewBox: _react.PropTypes.string,
    preserveAspectRatio: _react.PropTypes.string
}), _temp);


var NativeSvgView = (0, _reactNative.requireNativeComponent)('RNSVGSvgView', null);

exports.default = Svg;