/*!
 * =============================================================================
 * htmlattrstring
 * =============================================================================
 * 
 * Copyright (c) 2021 Jean-Mathieu Potvin
 * MIT License
 */

"use strict";

/**
 * Module exports.
 * @public
 */

 module.exports = { toString };

/**
 * Reduce an object containing attributes to a valid HTML attribute string.
 *
 * This function takes an object containing an arbitrary number of key/value
 * pairs and construct a single string from it. The string has the following
 * format: `key1="value1" key2="value2" key3="value3"` ...
 * 
 * This string is intended to be passed to EJS templates to easily construct
 * HTML tags with attributes from JS objects.
 *
 * @param {object} obj - An object, but not an array. Its keys should be
 *     enumerable. 
 * @return {string} A single string is returned.
 * @public
 */

function toString (obj) {
    // Accept pure objects only, and not arrays.
    if (typeof obj != "object" || Array.isArray(obj)) {
        throw new TypeError(`Value is not an object.`);
    }
    // Return a single string.
    //   1. Keep string values only and put these in an array.
    //   2. Create a new array of strings (key=stringValue).
    //   3. Join the values together in a single string and separate them by
    //      a space.
    return Object.keys(obj)
        .filter(key => typeof obj[key] === "string")
        .map(key => `${key}=\"${obj[key]}\"`)
        .join(" ");
}
