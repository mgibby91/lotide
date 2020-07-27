# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mgibby91/lotide`

**Require it:**

`const _ = require('@mgibby91/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first item (index 0) in an array.
* `tail(array)`: returns all the items in an array except the first item.
* `middle(array)`: returns the middle value(s) in an array.
* `assertArraysEqual(array1, arrray3)`: asserts if two arrays are equal.
* `assertObjectsEqual(obj1, obj2)`: asserts if two objects are equal.
* `assertEqual(val1, val2)`: asserts if two primitives are equal. 
* `countLetters(string)`: returns the count of non ' ' characters in a given string. 
* `eqArrays(array1, array2)`: returns a boolean comparing two arrays. 
* `eqObjects(obj1, obj2)`: returns a boolean comparing two objects. 
* `findKey(obj, callback)`: returns a key from a given object.
* `findKeyByValue(obj, callback)`: returns a key from an object given its corresponding value.
* `flatten(array)`: returns a single array given an array of nested arrays.
* `letterPositions(string)`: returns an object of letter positions of a given string
* `map(array, callback)`: returns a new array with each item of the original array modified based on the given callback function.
* `takeUntil(array, callback)`: returns a new array of values up until a value specified from the callback function.
* `without`: returns a new array of only values that have not been specified to be removed by the given callback function.

