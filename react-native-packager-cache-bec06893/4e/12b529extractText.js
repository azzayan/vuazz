Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return {
        alignment: anchord[props.textAnchor] || 0,
        frame: extractFontAndLines(props, childrenAsString(props.children)),
        path: props.path ? new _SerializablePath2.default(props.path).toJSON() : undefined
    };
};

var _SerializablePath = require('../SerializablePath');

var _SerializablePath2 = babelHelpers.interopRequireDefault(_SerializablePath);

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var newLine = /\n/g;
var defaultFontFamily = '"Helvetica Neue", "Helvetica", Arial';
var fontRegExp = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?)[ptexm%]*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
var fontFamilyPrefix = /^[\s"']*/;
var fontFamilySuffix = /[\s"']*$/;
var cachedFontObjectsFromString = {};

function childrenAsString(children) {
    if (typeof children === 'undefined') {
        return '';
    }
    if (typeof children === 'number') {
        return children.toString();
    }
    if (typeof children === 'string') {
        return children;
    }
    if (children.length) {
        return children.join('\n');
    }
    return '';
}

function extractFontAndLines(font, text) {
    return {
        font: extractFont(font),
        lines: text.split(newLine)
    };
}

function extractSingleFontFamily() {
    var fontFamilyString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFontFamily;

    return fontFamilyString.split(',')[0].replace(fontFamilyPrefix, '').replace(fontFamilySuffix, '');
}

function parseFontString(font) {
    if (cachedFontObjectsFromString.hasOwnProperty(font)) {
        return cachedFontObjectsFromString[font];
    }
    var match = fontRegExp.exec(font);
    if (!match) {
        return null;
    }
    var fontFamily = extractSingleFontFamily(match[3]);
    var fontSize = +match[2] || 12;
    var isBold = /bold/.exec(match[1]);
    var isItalic = /italic/.exec(match[1]);
    cachedFontObjectsFromString[font] = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: isBold ? 'bold' : 'normal',
        fontStyle: isItalic ? 'italic' : 'normal'
    };
    return cachedFontObjectsFromString[font];
}

function extractFont(font) {
    if (_lodash2.default.isNil(font)) {
        return null;
    }
    if (typeof font === 'string') {
        return parseFontString(font);
    }
    var fontFamily = extractSingleFontFamily(font.fontFamily);
    var fontSize = +font.fontSize || 12;

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: font.fontWeight,
        fontStyle: font.fontStyle
    };
}

var anchord = {
    end: 1,
    middle: 2,
    start: 0
};