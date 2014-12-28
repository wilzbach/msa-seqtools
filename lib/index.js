/*
 * biojs-utils-seqtools
 * https://github.com/greenify/biojs-utils-seqtools
 *
 * Copyright (c) 2014 greenify
 * Licensed under the MIT license.
 */

var st = {};
module.exports = st;

// extract IDs and push them to the meta dict
st.getMeta = function(label) {
  if (st.contains(label, "|")) {
    var identifiers = label.split("|");
    var k = 0;
    var database, databaseID;
    var meta = {};
    while (k < identifiers.length - 1) {
      database = identifiers[k];
      databaseID = identifiers[k + 1];
      meta[database] = databaseID;
      k += 2;
    }
    // assume the last entry is the label
    var name = identifiers[identifiers.length - 1];
    return [name, meta];
  }
  return [label, {}];
};


// search for a text
st.contains = function(text, search) {
  return ''.indexOf.call(text, search, 0) !== -1;
};

// split after e.g. 80 chars
st.splitNChars = function(txt, num) {
  var i, _ref;
  num = num || 80;
  var result = [];
  for (i = 0, _ref = txt.length - 1; i <= _ref; i += num) {
    result.push(txt.substr(i, num));
  }
  return result;
};
