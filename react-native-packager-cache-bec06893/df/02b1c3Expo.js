var _reactNative = require('react-native');

var _Constants = require('./Constants');

var _Constants2 = babelHelpers.interopRequireDefault(_Constants);

require('./Logs');

if (_Constants2.default.manifest && typeof _Constants2.default.manifest.env === 'object') {
  babelHelpers.extends(process.env, _Constants2.default.manifest.env);
}

module.exports = {
  get Amplitude() {
    return _reactNative.NativeModules.ExponentAmplitude;
  },
  get Crypto() {
    return _reactNative.NativeModules.ExponentCrypto;
  },
  get Fabric() {
    return _reactNative.NativeModules.ExponentFabric;
  },
  get Facebook() {
    return _reactNative.NativeModules.ExponentFacebook;
  },
  get FileSystem() {
    return _reactNative.NativeModules.ExponentFileSystem;
  },
  get ImageCropper() {
    return _reactNative.NativeModules.ExponentImageCropper;
  },
  get WebBrowser() {
    return _reactNative.NativeModules.ExponentWebBrowser;
  },
  get Segment() {
    return _reactNative.NativeModules.ExponentSegment;
  },
  get Util() {
    return _reactNative.NativeModules.ExponentUtil;
  },

  get apisAreAvailable() {
    return require('./apisAreAvailable').default;
  },
  get createTHREEViewClass() {
    return require('./createTHREEViewClass').default;
  },
  get registerRootComponent() {
    return require('./registerRootComponent').default;
  },
  get takeSnapshotAsync() {
    return require('./takeSnapshotAsync').default;
  },
  get Asset() {
    return require('./Asset').default;
  },
  get Accelerometer() {
    return require('./Accelerometer').default;
  },
  get GLView() {
    return require('./GLView').default;
  },
  get Gyroscope() {
    return require('./Gyroscope').default;
  },
  get Notifications() {
    return require('./Notifications').default;
  },

  get AppLoading() {
    return require('./AppLoading').default;
  },
  get BarCodeScanner() {
    return require('./BarCodeScanner').default;
  },
  get BlurView() {
    return require('./BlurView').default;
  },
  get KeepAwake() {
    return require('./KeepAwake').default;
  },
  get LinearGradient() {
    return require('./LinearGradient').default;
  },
  get MapView() {
    return require('react-native-maps');
  },
  get Video() {
    return require('./Video').default;
  },
  get Svg() {
    return require('./Svg').default;
  },

  get Audio() {
    return require('./Audio');
  },
  get Constants() {
    return require('./Constants');
  },
  get Contacts() {
    return require('./Contacts');
  },
  get DangerZone() {
    return require('./DangerZone');
  },
  get Font() {
    return require('./Font');
  },
  get Google() {
    return require('./Google');
  },
  get Icon() {
    return require('./Icon').default;
  },
  get ImagePicker() {
    return require('./ImagePicker');
  },
  get Location() {
    return require('./Location');
  },
  get Logs() {
    return require('./Logs');
  },
  get Permissions() {
    return require('./Permissions');
  },
  get FacebookAds() {
    return require('./FacebookAds');
  }
};

var Components = void 0;
Object.defineProperty(module.exports, 'Components', {
  get: function get() {
    if (!Components) {
      console.warn("Components under `Expo.Components` have been moved to the root `Expo` namespace. " + "For example, `Expo.Components.Video` is now `Expo.Video`. The `Expo.Components` " + "namespace is now deprecated and will be removed in version 17.0.0 of 'expo'.");
      Components = {
        AppLoading: module.exports.AppLoading,
        BarCodeScanner: module.exports.BarCodeScanner,
        BlurView: module.exports.BlurView,
        KeepAwake: module.exports.KeepAwake,
        LinearGradient: module.exports.LinearGradient,
        MapView: module.exports.MapView,
        Video: module.exports.Video,
        Svg: module.exports.Svg
      };
    }
    return Components;
  }
});

if (global) {
  global.__exponent = module.exports;
}