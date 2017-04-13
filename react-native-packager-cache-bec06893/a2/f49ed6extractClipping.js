Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    var clipPath = props.clipPath,
        clipRule = props.clipRule;

    var clippingProps = {};

    if (clipPath) {
        clippingProps.clipRule = clipRules[clipRule] === 0 ? 0 : 1;

        var matched = clipPath.match(_patternReg2.default);

        if (matched) {
            clippingProps.clipPathRef = matched[1];
        } else {
            clippingProps.clipPath = new _SerializablePath2.default(clipPath).toJSON();
        }
    }

    return clippingProps;
};

var _SerializablePath = require('../SerializablePath');

var _SerializablePath2 = babelHelpers.interopRequireDefault(_SerializablePath);

var _patternReg = require('./patternReg');

var _patternReg2 = babelHelpers.interopRequireDefault(_patternReg);

var clipRules = {
    evenodd: 0,
    nonzero: 1
};