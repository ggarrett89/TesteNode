# version 0.2
var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hello World! ' + os.hostname())
  res.end()
}

http.createServer(handleRequest).listen(3000)
