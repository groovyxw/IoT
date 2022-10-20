const http = require('http');
var url = require('url')

function parsetime (time) {

  //return time.getHours();
  return {
    year: time.getFullYear(),
    month: time.getMonth()+1,
    date: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

// Create an instance of the http server to handle HTTP requests
let server = http.createServer((req, res) => {
   // Set a response type
   res.writeHead(200, {'Content-Type': 'application/json'});
   // Get current time
   var d = new Date()
   var result
   let time = new Date(d.toISOString())
   //parse pathname of request
   var pathName = url.parse(req.url).pathname
   //call different functions according to pathname
   if (pathName == "/api/parse_currenttme")
     result = JSON.stringify( parsetime(time) )
   else if (pathName == "/api/unix_currenttme")
     result = JSON.stringify( unixtime(time) )

   // Send back a response and end the connection
   res.end( result  +'\n');
});

// Listening on the port provided on the command line
server.listen(Number(process.argv[2]))
console.log('Node server running on http://localhost:'+ process.argv[2]);