Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewBoxAttributes = exports.RadialGradientAttributes = exports.LinearGradientAttributes = exports.RenderableOnlyAttributes = exports.UseAttributes = exports.RectAttributes = exports.LineAttributes = exports.ImageAttributes = exports.EllipseAttributes = exports.CircleAttributes = exports.ClipPathAttributes = exports.GroupAttributes = exports.TextAttributes = exports.PathAttributes = undefined;

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var merge = _lodash2.default.assign;

function arrayDiffer(a, b) {
    if (_lodash2.default.isNil(a) || _lodash2.default.isNil(b)) {
        return true;
    }
    if (a.length !== b.length) {
        return true;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
}

function fontAndLinesDiffer(a, b) {
    if (a === b) {
        return false;
    }
    if (a.font !== b.font) {
        if (a.font === null) {
            return true;
        }
        if (b.font === null) {
            return true;
        }

        if (a.font.fontFamily !== b.font.fontFamily || a.font.fontSize !== b.font.fontSize || a.font.fontWeight !== b.font.fontWeight || a.font.fontStyle !== b.font.fontStyle) {
            return true;
        }
    }
    return arrayDiffer(a.lines, b.lines);
}

var ViewBoxAttributes = {
    minX: true,
    minY: true,
    vbWidth: true,
    vbHeight: true,
    align: true,
    meetOrSlice: true,
    name: true
};

var NodeAttributes = {
    name: true,
    matrix: {
        diff: arrayDiffer
    },
    opacity: true,
    clipRule: true,
    clipPathRef: true,
    clipPath: {
        diff: arrayDiffer
    },
    propList: {
        diff: arrayDiffer
    },
    responsible: true
};

var RenderableOnlyAttributes = {
    fill: {
        diff: arrayDiffer
    },
    fillOpacity: true,
    fillRule: true,
    stroke: {
        diff: arrayDiffer
    },
    strokeOpacity: true,
    strokeWidth: true,
    strokeLinecap: true,
    strokeLinejoin: true,
    strokeDasharray: {
        diff: arrayDiffer
    },
    strokeDashoffset: true,
    strokeMiterlimit: true
};

var RenderableAttributes = merge({}, NodeAttributes, RenderableOnlyAttributes);

var GroupAttributes = RenderableAttributes;

var UseAttributes = merge({
    href: true,
    width: true,
    height: true
}, RenderableAttributes);

var PathAttributes = merge({
    d: {
        diff: arrayDiffer
    }
}, RenderableAttributes);

var TextAttributes = merge({
    alignment: true,
    frame: {
        diff: fontAndLinesDiffer
    },
    path: {
        diff: arrayDiffer
    }
}, RenderableAttributes);

var ClipPathAttributes = {
    name: true
};

var LinearGradientAttributes = merge({
    x1: true,
    y1: true,
    x2: true,
    y2: true,
    gradient: {
        diff: arrayDiffer
    }
}, ClipPathAttributes);

var RadialGradientAttributes = merge({
    fx: true,
    fy: true,
    rx: true,
    ry: true,
    cx: true,
    cy: true,
    r: true,
    gradient: {
        diff: arrayDiffer
    }
}, ClipPathAttributes);

var CircleAttributes = merge({
    cx: true,
    cy: true,
    r: true
}, RenderableAttributes);

var EllipseAttributes = merge({
    cx: true,
    cy: true,
    rx: true,
    ry: true
}, RenderableAttributes);

var ImageAttributes = merge({
    x: true,
    y: true,
    width: true,
    height: true,
    src: true,
    align: true,
    meetOrSlice: true
}, RenderableAttributes);

var LineAttributes = merge({
    x1: true,
    y1: true,
    x2: true,
    y2: true
}, RenderableAttributes);

var RectAttributes = merge({
    x: true,
    y: true,
    width: true,
    height: true,
    rx: true,
    ry: true
}, RenderableAttributes);

exports.PathAttributes = PathAttributes;
exports.TextAttributes = TextAttributes;
exports.GroupAttributes = GroupAttributes;
exports.ClipPathAttributes = ClipPathAttributes;
exports.CircleAttributes = CircleAttributes;
exports.EllipseAttributes = EllipseAttributes;
exports.ImageAttributes = ImageAttributes;
exports.LineAttributes = LineAttributes;
exports.RectAttributes = RectAttributes;
exports.UseAttributes = UseAttributes;
exports.RenderableOnlyAttributes = RenderableOnlyAttributes;
exports.LinearGradientAttributes = LinearGradientAttributes;
exports.RadialGradientAttributes = RadialGradientAttributes;
exports.ViewBoxAttributes = ViewBoxAttributes;