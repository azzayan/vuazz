

'use strict';

var Platform = {
  OS: 'android',
  get Version() {
    var AndroidConstants = require('NativeModules').AndroidConstants;
    return AndroidConstants && AndroidConstants.Version;
  },
  get isTesting() {
    var constants = require('NativeModules').AndroidConstants;
    return constants && constants.isTesting;
  },
  select: function select(obj) {
    return obj.android;
  }
};

module.exports = Platform;