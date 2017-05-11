
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

var rsZWJ = '\\u200d';

var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;