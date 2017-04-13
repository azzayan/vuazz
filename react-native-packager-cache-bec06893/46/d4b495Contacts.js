Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADDRESSES = exports.EMAILS = exports.PHONE_NUMBERS = undefined;
exports.getContactsAsync = getContactsAsync;

var _reactNative = require('react-native');

function getContactsAsync() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return regeneratorRuntime.async(function getContactsAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentContacts.getContactsAsync(fields));

        case 2:
          return _context.abrupt('return', _context.sent);

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

var PHONE_NUMBERS = exports.PHONE_NUMBERS = 'phoneNumbers';
var EMAILS = exports.EMAILS = 'emails';
var ADDRESSES = exports.ADDRESSES = 'addresses';