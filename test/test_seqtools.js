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

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var biojsutilsseqtools = require('../');

describe('biojs-utils-seqtools module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(biojsutilsseqtools.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      biojsutilsseqtools.hello('biojs').should.equal("hello biojs");
    });
  });
});
