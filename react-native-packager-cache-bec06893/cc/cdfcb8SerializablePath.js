Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var MOVE_TO = 0;
var CLOSE = 1;
var LINE_TO = 2;
var CURVE_TO = 3;

var SerializablePath = function SerializablePath(path) {
    var _arguments = arguments,
        _this = this;

    babelHelpers.classCallCheck(this, SerializablePath);

    this.push = function () {
        var p = Array.prototype.join.call(_arguments, ' ').replace(/(\.\d+)(?=\-?\.)/ig, '$1,').match(/[a-df-z]|[\-+]?(?:[\d\.]e[\-+]?|[^\s\-+,a-z])+/ig);

        if (!p) {
            return _this;
        }

        var last = void 0,
            cmd = p[0],
            i = 1;

        while (cmd) {
            switch (cmd) {
                case 'm':
                    _this.move(p[i++], p[i++]);break;
                case 'l':
                    _this.line(p[i++], p[i++]);break;
                case 'c':
                    _this.curve(p[i++], p[i++], p[i++], p[i++], p[i++], p[i++]);break;
                case 's':
                    _this.curve(p[i++], p[i++], null, null, p[i++], p[i++]);break;
                case 'q':
                    _this.curve(p[i++], p[i++], p[i++], p[i++]);break;
                case 't':
                    _this.curve(p[i++], p[i++]);break;
                case 'a':
                    _this.arc(p[i + 5], p[i + 6], p[i], p[i + 1], p[i + 3], !+p[i + 4], +p[i + 2]);i += 7;break;
                case 'h':
                    _this.line(p[i++], 0);break;
                case 'v':
                    _this.line(0, p[i++]);break;

                case 'M':
                    _this.moveTo(p[i++], p[i++]);break;
                case 'L':
                    _this.lineTo(p[i++], p[i++]);break;
                case 'C':
                    _this.curveTo(p[i++], p[i++], p[i++], p[i++], p[i++], p[i++]);break;
                case 'S':
                    _this.curveTo(p[i++], p[i++], null, null, p[i++], p[i++]);break;
                case 'Q':
                    _this.curveTo(p[i++], p[i++], p[i++], p[i++]);break;
                case 'T':
                    _this.curveTo(p[i++], p[i++]);break;
                case 'A':
                    _this.arcTo(p[i + 5], p[i + 6], p[i], p[i + 1], p[i + 3], !+p[i + 4], +p[i + 2]);i += 7;break;
                case 'H':
                    _this.lineTo(p[i++], _this.penY);break;
                case 'V':
                    _this.lineTo(_this.penX, p[i++]);break;

                case 'Z':case 'z':
                    _this.close();break;
                default:
                    cmd = last;
                    i--;
                    continue;
            }

            last = cmd;
            if (last === 'm') {
                last = 'l';
            } else if (last === 'M') {
                last = 'L';
            }
            cmd = p[i++];
        }
        return _this;
    };

    this.reset = function () {
        _this.penX = _this.penY = 0;
        _this.penDownX = _this.penDownY = null;
        _this._pivotX = _this._pivotY = 0;
        _this.onReset();
        return _this;
    };

    this.move = function (x, y) {
        _this.onMove(_this.penX, _this.penY, _this._pivotX = _this.penX += +x, _this._pivotY = _this.penY += +y);
        return _this;
    };

    this.moveTo = function (x, y) {
        _this.onMove(_this.penX, _this.penY, _this._pivotX = _this.penX = +x, _this._pivotY = _this.penY = +y);
        return _this;
    };

    this.line = function (x, y) {
        return _this.lineTo(_this.penX + +x, _this.penY + +y);
    };

    this.lineTo = function (x, y) {
        if (_lodash2.default.isNil(_this.penDownX)) {
            _this.penDownX = _this.penX;_this.penDownY = _this.penY;
        }
        _this.onLine(_this.penX, _this.penY, _this._pivotX = _this.penX = +x, _this._pivotY = _this.penY = +y);
        return _this;
    };

    this.curve = function (c1x, c1y, c2x, c2y, ex, ey) {
        var x = _this.penX,
            y = _this.penY;

        return _this.curveTo(x + +c1x, y + +c1y, _lodash2.default.isNil(c2x) ? null : x + +c2x, _lodash2.default.isNil(c2y) ? null : y + +c2y, _lodash2.default.isNil(ex) ? null : x + +ex, _lodash2.default.isNil(ey) ? null : y + +ey);
    };

    this.curveTo = function (c1x, c1y, c2x, c2y, ex, ey) {
        var x = _this.penX,
            y = _this.penY;

        if (_lodash2.default.isNil(c2x)) {
            c2x = +c1x;c2y = +c1y;
            c1x = x * 2 - (_this._pivotX || 0);c1y = y * 2 - (_this._pivotY || 0);
        }

        if (_lodash2.default.isNil(ex)) {
            _this._pivotX = +c1x;_this._pivotY = +c1y;
            ex = +c2x;ey = +c2y;
            c2x = (ex + +c1x * 2) / 3;c2y = (ey + +c1y * 2) / 3;
            c1x = (x + +c1x * 2) / 3;c1y = (y + +c1y * 2) / 3;
        } else {
            _this._pivotX = +c2x;_this._pivotY = +c2y;
        }
        if (_lodash2.default.isNil(_this.penDownX)) {
            _this.penDownX = x;_this.penDownY = y;
        }
        _this.onBezierCurve(x, y, +c1x, +c1y, +c2x, +c2y, _this.penX = +ex, _this.penY = +ey);
        return _this;
    };

    this.arc = function (x, y, rx, ry, outer, counterClockwise, rotation) {
        return _this.arcTo(_this.penX + +x, _this.penY + +y, rx, ry, outer, counterClockwise, rotation);
    };

    this.arcTo = function (x, y, rx, ry, outer, counterClockwise, rotation) {
        ry = Math.abs(+ry || +rx || +y - _this.penY);
        rx = Math.abs(+rx || +x - _this.penX);

        if (!rx || !ry || x === _this.penX && y === _this.penY) {
            return _this.lineTo(x, y);
        }

        var tX = _this.penX,
            tY = _this.penY,
            clockwise = !+counterClockwise,
            large = !!+outer;

        var rad = rotation ? rotation * Math.PI / 180 : 0,
            cos = Math.cos(rad),
            sin = Math.sin(rad);
        x -= tX;y -= tY;

        var cx = cos * x / 2 + sin * y / 2,
            cy = -sin * x / 2 + cos * y / 2,
            rxry = rx * rx * ry * ry,
            rycx = ry * ry * cx * cx,
            rxcy = rx * rx * cy * cy,
            a = rxry - rxcy - rycx;

        if (a < 0) {
            a = Math.sqrt(1 - a / rxry);
            rx *= a;ry *= a;
            cx = x / 2;cy = y / 2;
        } else {
            a = Math.sqrt(a / (rxcy + rycx));

            if (large === clockwise) {
                a = -a;
            }
            var cxd = -a * cy * rx / ry,
                cyd = a * cx * ry / rx;
            cx = cos * cxd - sin * cyd + x / 2;
            cy = sin * cxd + cos * cyd + y / 2;
        }

        var xx = cos / rx,
            yx = sin / rx,
            xy = -sin / ry,
            yy = cos / ry;

        var sa = Math.atan2(xy * -cx + yy * -cy, xx * -cx + yx * -cy),
            ea = Math.atan2(xy * (x - cx) + yy * (y - cy), xx * (x - cx) + yx * (y - cy));

        cx += tX;cy += tY;
        x += tX;y += tY;

        if (_lodash2.default.isNil(_this.penDownX)) {
            _this.penDownX = _this.penX;_this.penDownY = _this.penY;
        }
        _this.onArc(tX, tY, _this._pivotX = _this.penX = x, _this._pivotY = _this.penY = y, cx, cy, rx, ry, sa, ea, !clockwise, rotation);
        return _this;
    };

    this.counterArc = function (x, y, rx, ry, outer) {
        return _this.arc(x, y, rx, ry, outer, true);
    };

    this.counterArcTo = function (x, y, rx, ry, outer) {
        return _this.arcTo(x, y, rx, ry, outer, true);
    };

    this.close = function () {
        if (!_lodash2.default.isNil(_this.penDownX)) {
            _this.onClose(_this.penX, _this.penY, _this.penX = _this.penDownX, _this.penY = _this.penDownY);
            _this.penDownX = null;
        }
        return _this;
    };

    this.onReset = function () {
        _this.path = [];
    };

    this.onMove = function (sx, sy, x, y) {
        _this.path.push(MOVE_TO, x, y);
    };

    this.onLine = function (sx, sy, x, y) {
        _this.path.push(LINE_TO, x, y);
    };

    this.onBezierCurve = function (sx, sy, p1x, p1y, p2x, p2y, x, y) {
        _this.path.push(CURVE_TO, p1x, p1y, p2x, p2y, x, y);
    };

    this._arcToBezier = function (sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation) {
        var rad = rotation ? rotation * Math.PI / 180 : 0,
            cos = Math.cos(rad),
            sin = Math.sin(rad),
            xx = cos * rx,
            yx = -sin * ry,
            xy = sin * rx,
            yy = cos * ry;

        var arc = ea - sa;
        if (arc < 0 && !ccw) {
            arc += Math.PI * 2;
        } else if (arc > 0 && ccw) {
            arc -= Math.PI * 2;
        }

        var n = Math.ceil(Math.abs(arc / (Math.PI / 2))),
            step = arc / n,
            k = 4 / 3 * Math.tan(step / 4);

        var x = Math.cos(sa),
            y = Math.sin(sa);

        for (var i = 0; i < n; i++) {
            var cp1x = x - k * y,
                cp1y = y + k * x;

            sa += step;
            x = Math.cos(sa);y = Math.sin(sa);

            var cp2x = x + k * y,
                cp2y = y - k * x;

            _this.onBezierCurve(sx, sy, cx + xx * cp1x + yx * cp1y, cy + xy * cp1x + yy * cp1y, cx + xx * cp2x + yx * cp2y, cy + xy * cp2x + yy * cp2y, sx = cx + xx * x + yx * y, sy = cy + xy * x + yy * y);
        }
    };

    this.onArc = function (sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation) {
        return _this._arcToBezier(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation);
    };

    this.onClose = function () {
        _this.path.push(CLOSE);
    };

    this.toJSON = function () {
        return _this.path;
    };

    this.reset();
    if (path instanceof SerializablePath) {
        this.path = path.path.slice();
    } else if (path) {
        this.push(path);
    }
};

exports.default = SerializablePath;