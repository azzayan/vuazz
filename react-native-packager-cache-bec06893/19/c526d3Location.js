Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentPositionAsync = getCurrentPositionAsync;
exports.watchPositionAsync = watchPositionAsync;

var _reactNative = require('react-native');

var LocationEventEmitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.ExponentLocation);

var nextWatchId = 0;
var watchCallbacks = {};
var deviceEventSubscription = void 0;

function getCurrentPositionAsync(options) {
  var _this = this;

  if (_reactNative.Platform.OS === 'android') {
    return _reactNative.NativeModules.ExponentLocation.getCurrentPositionAsync(options);
  }

  return new Promise(function _callee(resolve, reject) {
    var done, subscription;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            done = false;
            subscription = void 0;
            _context.next = 5;
            return regeneratorRuntime.awrap(watchPositionAsync(options, function (location) {
              if (!done) {
                resolve(location);
                done = true;
              }
              if (subscription) {
                subscription.remove();
              }
            }));

          case 5:
            subscription = _context.sent;

            if (done) {
              subscription.remove();
            }
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            reject(_context.t0);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, null, _this, [[0, 9]]);
  });
}

function watchPositionAsync(options, callback) {
  var ExponentLocation, watchId, removed;
  return regeneratorRuntime.async(function watchPositionAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ExponentLocation = _reactNative.NativeModules.ExponentLocation;


          if (!deviceEventSubscription) {
            deviceEventSubscription = LocationEventEmitter.addListener('Exponent.locationChanged', function (_ref) {
              var watchId = _ref.watchId,
                  location = _ref.location;

              var callback = watchCallbacks[watchId];
              if (callback) {
                callback(location);
              } else {
                ExponentLocation.removeWatchAsync(watchId);
              }
            });
          }

          watchId = nextWatchId++;

          watchCallbacks[watchId] = callback;
          _context2.next = 6;
          return regeneratorRuntime.awrap(ExponentLocation.watchPositionImplAsync(watchId, options));

        case 6:
          removed = false;
          return _context2.abrupt('return', {
            remove: function remove() {
              if (!removed) {
                ExponentLocation.removeWatchAsync(watchId);
                delete watchCallbacks[watchId];
                if (Object.keys(watchCallbacks).length === 0) {
                  LocationEventEmitter.removeSubscription(deviceEventSubscription);
                  deviceEventSubscription = null;
                }
                removed = true;
              }
            }
          });

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}