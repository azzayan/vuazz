Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    var responsible = void 0;
    var touchable = void 0;

    return _lodash2.default.reduce(props, function (prev, value, key) {
        if (value && (_props.responderProps[key] || _props.touchableProps[key])) {
            prev[key] = value;
            if (!responsible) {
                responsible = true;
                prev.responsible = true;
            }
            if (!touchable && _props.touchableProps[key]) {
                touchable = true;
                prev.touchable = true;
            }
        }

        return prev;
    }, {
        responsible: false,
        touchable: false
    });
};

var _props = require('../props');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);