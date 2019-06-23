var express = require("express");
var socket = require("socket.io");
var api = express();
var io = socket.listen(api.listen(8080));

api.use(express.static(__dirname+ '/public'));

api.get('/',function(req,res){
	
	res.sendFile(__dirname+'/index.html');
});
io.sockets.on('connection', function (client) {
	console.log('Connection socket!');
	client.on('draw',function(data){
		client.broadcast.emit('draw',data);
	});
});
console.log("Server start... http://localhost:8080");
