// This file is generated by `TEST=test/_.js node misc/gen.js`

var assert = require('assert')
var mappingTemplate = require('../')

describe('$input.path|$input.json', function() {
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-12f77fd5
  describe('H=`{}` P=`a=b` ===> T=`"$input.path(\'$\')"`', function() {
    it('return a=b', function() {
      var expected = "a=b";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "a=b"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-fcaf7ddd
  describe('H=`{}` P=`"a=b"` ===> T=`"$input.path(\'$\')"`', function() {
    it('return "a=b"', function() {
      var expected = "a=b";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "\"a=b\""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-0dce6fa3
  describe('H=`{}` P=`a=b` ===> T=`$input.json(\'$\')`', function() {
    it('return a=b', function() {
      var expected = "a=b";
      var actual = JSON.parse(mappingTemplate({template: "$input.json('$')", payload: "a=b"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-dbd6cf1c
  describe('H=`{}` P=`"a=b"` ===> T=`$input.json(\'$\')`', function() {
    it('return "a=b"', function() {
      var expected = "a=b";
      var actual = JSON.parse(mappingTemplate({template: "$input.json('$')", payload: "\"a=b\""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-03be1e25
  describe('H=`{}` P=`{}` ===> T=`"$input.path(\'$\')"`', function() {
    it('return {}', function() {
      var expected = "{}";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "{}"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-1b8d22cd
  describe('H=`{}` P=`"{}"` ===> T=`"$input.path(\'$\')"`', function() {
    it('return "{}"', function() {
      var expected = "{}";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "\"{}\""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-b9f18c27
  describe('H=`{}` P=`{}` ===> T=`$input.json(\'$\')`', function() {
    it('return {}', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input.json('$')", payload: "{}"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-098fd028
  describe('H=`{}` P=`` ===> T=`$input.json(\'$\')`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input.json('$')", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-91575d0e
  describe('H=`{}` P=`` ===> T=`$input.path(\'$\')`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input.path('$')", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-25c6993c
  describe('H=`{}` P=`name=toqoz` ===> T=`{"name": "$input.path(\'$\')"}`', function() {
    it('return name=toqoz', function() {
      var expected = {"name":"name=toqoz"};
      var actual = JSON.parse(mappingTemplate({template: "{\"name\": \"$input.path('$')\"}", payload: "name=toqoz"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-122ff6ce
  describe('H=`{}` P=`{a` ===> T=`"$input.path(\'$\')"`', function() {
    it('throw error', function() {
      assert.throws(function() { mappingTemplate({template: "\"$input.path('$')\"", payload: "{a"}); });
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-d4719b3d
  describe('H=`{}` P=`a{b` ===> T=`"$input.path(\'$\')"`', function() {
    it('return a{b', function() {
      var expected = "a{b";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "a{b"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-2b1f2df4
  describe('H=`{}` P=`[a` ===> T=`"$input.path(\'$\')"`', function() {
    it('throw error', function() {
      assert.throws(function() { mappingTemplate({template: "\"$input.path('$')\"", payload: "[a"}); });
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-c0cfe50d
  describe('H=`{}` P=`a[` ===> T=`"$input.path(\'$\')"`', function() {
    it('return a[', function() {
      var expected = "a[";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "a["}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-a7361ae0
  describe('H=`{}` P=`null{` ===> T=`"$input.path(\'$\')"`', function() {
    it('return null{', function() {
      var expected = "null{";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "null{"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-728fbd1f
  describe('H=`{}` P=`true{` ===> T=`"$input.path(\'$\')"`', function() {
    it('return true{', function() {
      var expected = "true{";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "true{"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-461fd8fa
  describe('H=`{}` P=`false{` ===> T=`"$input.path(\'$\')"`', function() {
    it('return false{', function() {
      var expected = "false{";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "false{"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-48665148
  describe('H=`{}` P=`undefined{` ===> T=`"$input.path(\'$\')"`', function() {
    it('return undefined{', function() {
      var expected = "undefined{";
      var actual = JSON.parse(mappingTemplate({template: "\"$input.path('$')\"", payload: "undefined{"}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-cd963d7c
  describe('H=`{}` P=`` ===> T=`$input`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-ec2bf3b4
  describe('H=`{}` P=`` ===> T=`$input.keySet`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input.keySet", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-3e03488f
  describe('H=`{}` P=`` ===> T=`$input.params.keySet`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input.params.keySet", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-a35f2355
  describe('H=`{}` P=`` ===> T=`$util`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$util", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-29301967
  describe('H=`{}` P=`` ===> T=`$input.params`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input.params", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-819c3c26
  describe('H=`{}` P=`` ===> T=`$input.json`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$input.json", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
  // https://github.com/ToQoz/api-gateway-mapping-template/blob/master/test/_.md#example-caa3f41d
  describe('H=`{}` P=`` ===> T=`$util.urlEncode`', function() {
    it('return ', function() {
      var expected = {};
      var actual = JSON.parse(mappingTemplate({template: "$util.urlEncode", payload: ""}));
      assert.deepEqual(expected, actual);
    });
  });
});