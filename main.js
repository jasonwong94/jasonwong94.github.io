// this is a mock server meant to mimic the actual host server...

var http = require('http')
var express = require('express')
const app = express()

app.get('/*', function(req, res){
  console.log("request received")
  console.log(req.path)

  var fileName = __dirname + req.path
  res.sendFile(fileName, function(err){
    if(err){
      res.sendStatus(404)
    } else {
      res.sendFile(fileName)
    }
  })
})

app.listen(2000, function(){
  console.log("Server running!")
})
