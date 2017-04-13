Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _extractProps = require('../lib/extract/extractProps');

var _extractProps2 = babelHelpers.interopRequireDefault(_extractProps);

var _SvgTouchableMixin = require('../lib/SvgTouchableMixin');

var _SvgTouchableMixin2 = babelHelpers.interopRequireDefault(_SvgTouchableMixin);

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var Shape = function (_Component) {
    babelHelpers.inherits(Shape, _Component);

    function Shape() {
        babelHelpers.classCallCheck(this, Shape);

        var _this = babelHelpers.possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).apply(this, arguments));

        _this.extractProps = function (props, options) {
            var extractedProps = (0, _extractProps2.default)(props, options);
            if (extractedProps.touchable && !extractedProps.disabled) {
                _lodash2.default.assign(extractedProps, {
                    onStartShouldSetResponder: _this.touchableHandleStartShouldSetResponder,
                    onResponderTerminationRequest: _this.touchableHandleResponderTerminationRequest,
                    onResponderGrant: _this.touchableHandleResponderGrant,
                    onResponderMove: _this.touchableHandleResponderMove,
                    onResponderRelease: _this.touchableHandleResponderRelease,
                    onResponderTerminate: _this.touchableHandleResponderTerminate
                });
            }

            return extractedProps;
        };

        _lodash2.default.forEach(_SvgTouchableMixin2.default, function (method, key) {
            _this[key] = method.bind(_this);
        });
        _this.state = _this.touchableGetInitialState();
        return _this;
    }

    return Shape;
}(_react.Component);

exports.default = Shape;