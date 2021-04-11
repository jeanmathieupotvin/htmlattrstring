/*!
 * =============================================================================
 * htmlattrstring - unit tests
 * =============================================================================
 * 
 * Copyright (c) 2021 Jean-Mathieu Potvin
 * MIT License
 */

"use strict";

// Dependencies.
const assert   = require("assert").strict;
const toString = require("../index").toString;

// Errors.
describe("Check it works on objects only", () => {
    it("returns a string for objects", () => {
        assert.strictEqual(toString({}), "");
    });
    it("returns an error for arrays", () => {
        assert.throws(
            () => toString([]),
            new TypeError(`Value is not an object.`));
    });
    it("returns an error for anything else", () => {
        const expErr = new TypeError(`Value is not an object.`);
        assert.throws(() => toString(1),       expErr);
        assert.throws(() => toString(true),    expErr);
        assert.throws(() => toString("hello"), expErr);
    });
});

// Outputs.
describe("Check it returns strings as intended", () => {
    it("returns an empty string for empty objects", () => {
        assert.equal(toString({}), "");
    });
    it("returns a proper string for proper objects", () => {
        const actual = toString({
            src: "some/value",
            height: "300",
            width: "400"
        });
        const expected = 'src=\"some/value\" height=\"300\" width=\"400\"';
        assert.strictEqual(actual, expected);
    });
    it("filters out non-string values properly before returning", () => {
        const actual = toString({
            src: "some/value",
            height: "300",
            width: "400",
            toRm1: 3,
            toRm2: true,
            toRm3: [],
            toRm4: {}
        });
        const expected = 'src=\"some/value\" height=\"300\" width=\"400\"';
        assert.strictEqual(actual, expected);
    });
});
