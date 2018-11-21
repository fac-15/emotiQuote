const http = require('http');
const router = require('./router.js');
const port = 5000;

const server = http.createServer(router);

// server.listen(port);
// console.log(`server is listening on localhost:${port}`)
server.listen(port, function(){
  console.log(`server is listening on localhost:${port}`)
});
