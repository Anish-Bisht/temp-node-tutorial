const http = require('http')
const _ = require('lodash')
const items = [1, [1234], 1,[23,3],[23],[3]];
const newItems = _.flattenDepth(items)
console.log(newItems);