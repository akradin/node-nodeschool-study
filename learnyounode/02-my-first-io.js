var fs = require('fs')

var contents = fs.readFileSync(process.argv[2]).toString().split('\n')
var lines = contents.length -1


console.log(lines)
