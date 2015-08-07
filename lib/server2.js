/**
 * Server 2
 */

var static = require('node-static'),
 io = require('socket.io');
 
// 
// Create a node-static server instance to serve the './public' folder 
// 
var file = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // 
        // Serve files! 
        // 
        file.serve(request, response);
    }).resume();
}).listen(8888);