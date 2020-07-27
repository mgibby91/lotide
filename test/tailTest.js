
const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ['yo yo', 'lighthouse', 'labs'];
console.log(tail(words));
assertEqual(words.length, 3);