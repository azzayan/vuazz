
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;