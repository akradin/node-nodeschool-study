var fs = require('fs')

fs.readFile(process.argv[2], function(err, contents){
  if (err){
    return err
  }
  else {
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
  }

})
