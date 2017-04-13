Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (opacity) {
    var value = +opacity;
    return _lodash2.default.isNil(opacity) || isNaN(value) ? 1 : value;
};

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);