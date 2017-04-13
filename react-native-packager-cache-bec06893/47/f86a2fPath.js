Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-svg/elements/Path.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _SerializablePath = require('../lib/SerializablePath');

var _SerializablePath2 = babelHelpers.interopRequireDefault(_SerializablePath);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var _props = require('../lib/props');

var Path = (_temp2 = _class = function (_Shape) {
    babelHelpers.inherits(Path, _Shape);

    function Path() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Path);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Path.__proto__ || Object.getPrototypeOf(Path)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Path, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var d = new _SerializablePath2.default(props.d).toJSON();
            return _react2.default.createElement(RNSVGPath, babelHelpers.extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.extractProps(props), {
                d: d,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }));
        }
    }]);
    return Path;
}(_Shape3.default), _class.displayName = 'Path', _class.propTypes = babelHelpers.extends({}, _props.pathProps, {
    d: _react.PropTypes.string.isRequired
}), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGPath = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.PathAttributes,
    uiViewClassName: 'RNSVGPath'
});

exports.default = Path;