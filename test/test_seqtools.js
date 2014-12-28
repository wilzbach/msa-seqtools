/*
 * biojs-utils-seqtools
 * https://github.com/greenify/biojs-utils-seqtools
 *
 * Copyright (c) 2014 greenify
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;
var equal = assert.deepEqual;

// requires your main app (specified in index.js)
var st = require('../');

describe('biojs-utils-seqtools module', function(){
  describe('#getMeta()', function(){
    it('should split correctly', function(){
      equal(st.getMeta("sp|abc|def"),["def", {sp: "abc"}]);
    });
  });
  describe('#contains()', function(){
    it('should find text', function(){
      assert.ok(st.contains("abc", "a"));
    });
    it('should not find non-existing text', function(){
      assert.notOk(st.contains("abc", "e"));
    });
  });
  describe('#splitNChars()', function(){
    it('should split correctly', function(){
      equal(st.splitNChars("abc", 2),["ab", "c"]);
    });
  });
});
