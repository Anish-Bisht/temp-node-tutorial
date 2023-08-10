const {readFileSync, writeFileSync} = require('fs')
console.log("task started")

const first = readFileSync('./content/first.txt',   'utf8')
const second = readFileSync('./content/second.txt',   'utf8')
writeFileSync('./content/result-sync.text', 'Here is the result ${first}',
{flag:'a'}
)

console.log("done")
console.log("starting the next one")
