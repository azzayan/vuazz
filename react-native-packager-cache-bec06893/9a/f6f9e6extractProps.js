Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { stroke: true, transform: true, fill: true, responder: true };

    var propList = [];
    Object.keys(_attributes.RenderableOnlyAttributes).forEach(function (name) {
        if (!_lodash2.default.isNil(props[name])) {
            if (name === 'clipPath') {
                if (extractedProps[name]) {
                    propList.push(name);
                } else if (extractedProps.clipPathRef) {
                    propList.push('clipPathRef');
                }
            } else {
                propList.push(name);
            }
        }
    });

    var extractedProps = {
        opacity: (0, _extractOpacity2.default)(props.opacity),
        propList: propList
    };

    if (props.id) {
        extractedProps.name = props.id;
    }

    if (props.clipPath) {
        _lodash2.default.assign(extractedProps, (0, _extractClipping2.default)(props));
    }

    if (options.stroke) {
        _lodash2.default.assign(extractedProps, (0, _extractStroke2.default)(props));
    }

    if (options.fill) {
        _lodash2.default.assign(extractedProps, (0, _extractFill2.default)(props));
    }

    if (options.transform) {
        extractedProps.matrix = (0, _extractTransform2.default)(props);
    } else if (props.transform) {
        extractedProps.matrix = (0, _extractTransform2.default)(props.transform);
    }

    if (options.responder) {
        _lodash2.default.assign(extractedProps, (0, _extractResponder2.default)(props));
    }

    return extractedProps;
};

var _extractFill = require('./extractFill');

var _extractFill2 = babelHelpers.interopRequireDefault(_extractFill);

var _extractStroke = require('./extractStroke');

var _extractStroke2 = babelHelpers.interopRequireDefault(_extractStroke);

var _extractTransform = require('./extractTransform');

var _extractTransform2 = babelHelpers.interopRequireDefault(_extractTransform);

var _extractClipping = require('./extractClipping');

var _extractClipping2 = babelHelpers.interopRequireDefault(_extractClipping);

var _extractResponder = require('./extractResponder');

var _extractResponder2 = babelHelpers.interopRequireDefault(_extractResponder);

var _extractOpacity = require('./extractOpacity');

var _extractOpacity2 = babelHelpers.interopRequireDefault(_extractOpacity);

var _attributes = require('../attributes');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);