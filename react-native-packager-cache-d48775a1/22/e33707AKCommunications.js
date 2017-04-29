'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.web = exports.textWithoutEncoding = exports.text = exports.email = exports.phonecall = undefined;

var _reactNative = require('react-native');

var phonecall = exports.phonecall = function phonecall(phoneNumber, prompt) {
	if (arguments.length !== 2) {
		console.log('you must supply exactly 2 arguments');
		return;
	}

	if (!isCorrectType('String', phoneNumber)) {
		console.log('the phone number must be provided as a String value');
		return;
	}

	if (!isCorrectType('Boolean', prompt)) {
		console.log('the prompt parameter must be a Boolean');
		return;
	}

	var url = void 0;

	if (_reactNative.Platform.OS !== 'android') {
		url = prompt ? 'telprompt:' : 'tel:';
	} else {
		url = 'tel:';
	}

	url += phoneNumber;

	LaunchURL(url);
};

var email = exports.email = function email(to, cc, bcc, subject, body) {
	var url = 'mailto:';
	var argLength = arguments.length;

	switch (argLength) {
		case 0:
			LaunchURL(url);
			return;
		case 5:
			break;
		default:
			console.log('you must supply either 0 or 5 arguments. You supplied ' + argLength);
			return;
	}

	var valueAdded = false;

	if (isCorrectType('Array', arguments[0])) {
		var validAddresses = getValidArgumentsFromArray(arguments[0], 'String');

		if (validAddresses.length > 0) {
			url += encodeURIComponent(validAddresses.join(','));
		}
	}

	url += '?';

	if (isCorrectType('Array', arguments[1])) {
		var _validAddresses = getValidArgumentsFromArray(arguments[1], 'String');

		if (_validAddresses.length > 0) {
			valueAdded = true;
			url += 'cc=' + encodeURIComponent(_validAddresses.join(','));
		}
	}

	if (isCorrectType('Array', arguments[2])) {
		if (valueAdded) {
			url += '&';
		}

		var _validAddresses2 = getValidArgumentsFromArray(arguments[2], 'String');

		if (_validAddresses2.length > 0) {
			valueAdded = true;
			url += 'bcc=' + encodeURIComponent(_validAddresses2.join(','));
		}
	}

	if (isCorrectType('String', arguments[3])) {
		if (valueAdded) {
			url += '&';
		}

		valueAdded = true;
		url += 'subject=' + encodeURIComponent(arguments[3]);
	}

	if (isCorrectType('String', arguments[4])) {
		if (valueAdded) {
			url += '&';
		}

		url += 'body=' + encodeURIComponent(arguments[4]);
	}

	LaunchURL(url);
};

var text = exports.text = function text() {
	var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	if (arguments.length > 2) {
		console.log('you supplied too many arguments. You can either supply 0 or 1 or 2');
		return;
	}

	var url = 'sms:';

	if (phoneNumber) {
		if (isCorrectType('String', phoneNumber)) {
			url += phoneNumber;
		} else {
			console.log('the phone number should be provided as a string. It was provided as ' + Object.prototype.toString.call(phoneNumber).slice(8, -1) + ',ignoring the value provided');
		}
	}

	if (body) {
		if (isCorrectType('String', body)) {
			if (_reactNative.Platform.OS === 'android') body = encodeURIComponent(body);
			url += _reactNative.Platform.OS === 'ios' ? '&body=' + encodeURIComponent(body) : '?body=' + encodeURIComponent(body);
		} else {
			console.log('the body should be provided as a string. It was provided as ' + Object.prototype.toString.call(body).slice(8, -1) + ',ignoring the value provided');
		}
	}

	LaunchURL(url);
};

var textWithoutEncoding = exports.textWithoutEncoding = function textWithoutEncoding() {
	var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	if (arguments.length > 2) {
		console.log('you supplied too many arguments. You can either supply 0 or 1 or 2');
		return;
	}

	var url = 'sms:';

	if (phoneNumber) {
		if (isCorrectType('String', phoneNumber)) {
			url += phoneNumber;
		} else {
			console.log('the phone number should be provided as a string. It was provided as ' + Object.prototype.toString.call(phoneNumber).slice(8, -1) + ',ignoring the value provided');
		}
	}

	if (body) {
		if (isCorrectType('String', body)) {
			url += _reactNative.Platform.OS === 'ios' ? '&body=' + body : '?body=' + body;
		} else {
			console.log('the body should be provided as a string. It was provided as ' + Object.prototype.toString.call(body).slice(8, -1) + ',ignoring the value provided');
		}
	}

	LaunchURL(url);
};

var web = exports.web = function web() {
	var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	if (!address) {
		console.log('Missing address argument');
		return;
	}
	if (!isCorrectType('String', address)) {
		console.log('address was not provided as a string, it was provided as ' + Object.prototype.toString.call(address).slice(8, -1));
		return;
	}
	LaunchURL(address);
};

var LaunchURL = function LaunchURL(url) {
	_reactNative.Linking.canOpenURL(url).then(function (supported) {
		if (!supported) {
			console.log('Can\'t handle url: ' + url);
		} else {
			_reactNative.Linking.openURL(url).catch(function (err) {
				if (url.includes('telprompt')) {} else {
					console.warn('openURL error', err);
				}
			});
		}
	}).catch(function (err) {
		return console.warn('An unexpected error happened', err);
	});
};

var getValidArgumentsFromArray = function getValidArgumentsFromArray(array, type) {
	var validValues = [];
	array.forEach(function (value) {
		if (isCorrectType(type, value)) {
			validValues.push(value);
		}
	});

	return validValues;
};

var isCorrectType = function isCorrectType(expected, actual) {
	return Object.prototype.toString.call(actual).slice(8, -1) === expected;
};

exports.default = { phonecall: phonecall, text: text, textWithoutEncoding: textWithoutEncoding, email: email, web: web };