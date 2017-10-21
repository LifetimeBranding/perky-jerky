"use strict";

exports.__esModule = true;
var assert = require('assert');
var datamodel = require("../build/data-model");

describe('numberOfProducts', function () {
    it('should return 5', function () {
        assert.equal(5, datamodel["default"].prototype.numberOfProducts());
    });
});
