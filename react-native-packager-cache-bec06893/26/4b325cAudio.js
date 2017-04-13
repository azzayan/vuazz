Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sound = undefined;
exports.setIsEnabledAsync = setIsEnabledAsync;

var _reactNative = require('react-native');

var _Asset = require('./Asset');

var _Asset2 = babelHelpers.interopRequireDefault(_Asset);

var _enabled = false;
var _DISABLED_ERROR = new Error('Cannot complete operation because audio is not enabled.');
var _NOT_LOADED_ERROR = new Error('Cannot complete operation because sound is not loaded.');
var _DEFAULT_POLLING_TIMEOUT_MILLIS = 500;

function setIsEnabledAsync(value) {
  return regeneratorRuntime.async(function setIsEnabledAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _enabled = value;
          _context.next = 3;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAudio.setIsEnabled(value));

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

var Sound = exports.Sound = function () {
  function Sound(_ref) {
    var _this = this;

    var source = _ref.source;
    babelHelpers.classCallCheck(this, Sound);

    this._statusPollingLoop = function () {
      if (!_enabled) {
        return;
      }
      if (_this.statusChangeCallback != null) {
        _this.getStatusAsync();
      }
      if (_this.loaded) {
        _this.statusPollingTimeoutVariable = setTimeout(_this._statusPollingLoop, _this.statusPollingTimeoutMillis);
      }
    };

    this._internalPlaybackFinishedCallback = function (status) {
      _this._tryCallStatusChangeCallbackForStatus(status);
      if (_this.userPlaybackFinishedCallback != null) {
        _this.userPlaybackFinishedCallback();
      }
      _this._setInternalPlaybackFinishedCallback();
    };

    if (typeof source === 'number') {
      var asset = _Asset2.default.fromModule(source);
      this.uri = asset.localUri || asset.uri;
    } else if (typeof source === 'string') {
      this.uri = source;
    } else {
      this.uri = source.localUri || source.uri;
    }

    this.loaded = false;
    this.key = -1;
    this.durationMillis = 0;
    this.statusChangeCallback = null;
    this.userPlaybackFinishedCallback = null;
    this.statusPollingTimeoutVariable = null;
    this.statusPollingTimeoutMillis = _DEFAULT_POLLING_TIMEOUT_MILLIS;
  }

  babelHelpers.createClass(Sound, [{
    key: '_disableStatusPolling',
    value: function _disableStatusPolling() {
      if (this.statusPollingTimeoutVariable != null) {
        clearTimeout(this.statusPollingTimeoutVariable);
        this.statusPollingTimeoutVariable = null;
      }
    }
  }, {
    key: '_enableStatusPolling',
    value: function _enableStatusPolling() {
      if (_enabled) {
        this._disableStatusPolling();
        this._statusPollingLoop();
      }
    }
  }, {
    key: '_tryCallStatusChangeCallbackForStatus',
    value: function _tryCallStatusChangeCallbackForStatus(status) {
      if (this.statusChangeCallback != null) {
        this.statusChangeCallback(status);
      }
    }
  }, {
    key: '_setInternalPlaybackFinishedCallback',
    value: function _setInternalPlaybackFinishedCallback() {
      if (this.loaded) {
        _reactNative.NativeModules.ExponentAudio.setPlaybackFinishedCallback(this.key, this._internalPlaybackFinishedCallback);
      }
    }
  }, {
    key: '_performOperationAndUpdateStatusAsync',
    value: function _performOperationAndUpdateStatusAsync(operation) {
      var _ref2, _status;

      return regeneratorRuntime.async(function _performOperationAndUpdateStatusAsync$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_enabled) {
                _context2.next = 2;
                break;
              }

              throw _DISABLED_ERROR;

            case 2:
              if (!this.loaded) {
                _context2.next = 11;
                break;
              }

              _context2.next = 5;
              return regeneratorRuntime.awrap(operation());

            case 5:
              _ref2 = _context2.sent;
              _status = _ref2.status;

              this._tryCallStatusChangeCallbackForStatus(_status);
              return _context2.abrupt('return', _status);

            case 11:
              throw _NOT_LOADED_ERROR;

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'loadAsync',
    value: function loadAsync() {
      var result;
      return regeneratorRuntime.async(function loadAsync$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (_enabled) {
                _context3.next = 2;
                break;
              }

              throw _DISABLED_ERROR;

            case 2:
              if (this.loaded) {
                _context3.next = 10;
                break;
              }

              _context3.next = 5;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAudio.load(this.uri));

            case 5:
              result = _context3.sent;

              this.key = result.key;
              this.durationMillis = result.durationMillis;
              this.loaded = true;
              this._setInternalPlaybackFinishedCallback();

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'isLoaded',
    value: function isLoaded() {
      return this.loaded;
    }
  }, {
    key: 'getDurationMillis',
    value: function getDurationMillis() {
      return this.loaded ? this.durationMillis : null;
    }
  }, {
    key: 'setStatusChangeCallback',
    value: function setStatusChangeCallback(callback) {
      this.statusChangeCallback = callback;
      if (callback == null) {
        this._disableStatusPolling();
      } else {
        this._enableStatusPolling();
      }
    }
  }, {
    key: 'setPlaybackFinishedCallback',
    value: function setPlaybackFinishedCallback(callback) {
      this.userPlaybackFinishedCallback = callback;
    }
  }, {
    key: 'setStatusPollingTimeoutMillis',
    value: function setStatusPollingTimeoutMillis(value) {
      this.statusPollingTimeoutMillis = value;
    }
  }, {
    key: 'unloadAsync',
    value: function unloadAsync() {
      return regeneratorRuntime.async(function unloadAsync$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!this.loaded) {
                _context4.next = 8;
                break;
              }

              this.loaded = false;
              this._disableStatusPolling();
              this.userPlaybackFinishedCallback = null;
              this.statusChangeCallback = null;
              _context4.next = 7;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAudio.unload(this.key));

            case 7:
              return _context4.abrupt('return', _context4.sent);

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'playAsync',
    value: function playAsync() {
      var _this2 = this;

      return regeneratorRuntime.async(function playAsync$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.play(_this2.key);
              }));

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'pauseAsync',
    value: function pauseAsync() {
      var _this3 = this;

      return regeneratorRuntime.async(function pauseAsync$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.pause(_this3.key);
              }));

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'stopAsync',
    value: function stopAsync() {
      var _this4 = this;

      return regeneratorRuntime.async(function stopAsync$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.stop(_this4.key);
              }));

            case 1:
            case 'end':
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'setPositionAsync',
    value: function setPositionAsync(millis) {
      var _this5 = this;

      return regeneratorRuntime.async(function setPositionAsync$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.setPosition(_this5.key, millis);
              }));

            case 1:
            case 'end':
              return _context8.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'setRateAsync',
    value: function setRateAsync(value, shouldCorrectPitch) {
      var _this6 = this;

      return regeneratorRuntime.async(function setRateAsync$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(value < 0.0 || value > 32.0)) {
                _context9.next = 2;
                break;
              }

              throw new Error('Rate value must be between 0.0 and 32.0.');

            case 2:
              return _context9.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.setRate(_this6.key, value, shouldCorrectPitch);
              }));

            case 3:
            case 'end':
              return _context9.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'setVolumeAsync',
    value: function setVolumeAsync(value) {
      var _this7 = this;

      return regeneratorRuntime.async(function setVolumeAsync$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (!(value < 0.0 || value > 1.0)) {
                _context10.next = 2;
                break;
              }

              throw new Error('Volume value must be between 0.0 and 1.0.');

            case 2:
              return _context10.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.setVolume(_this7.key, value);
              }));

            case 3:
            case 'end':
              return _context10.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'setIsMutedAsync',
    value: function setIsMutedAsync(value) {
      var _this8 = this;

      return regeneratorRuntime.async(function setIsMutedAsync$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.setIsMuted(_this8.key, value);
              }));

            case 1:
            case 'end':
              return _context11.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'setIsLoopingAsync',
    value: function setIsLoopingAsync(value) {
      var _this9 = this;

      return regeneratorRuntime.async(function setIsLoopingAsync$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.setIsLooping(_this9.key, value);
              }));

            case 1:
            case 'end':
              return _context12.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'getStatusAsync',
    value: function getStatusAsync() {
      var _this10 = this;

      return regeneratorRuntime.async(function getStatusAsync$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt('return', this._performOperationAndUpdateStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAudio.getStatus(_this10.key);
              }));

            case 1:
            case 'end':
              return _context13.stop();
          }
        }
      }, null, this);
    }
  }]);
  return Sound;
}();