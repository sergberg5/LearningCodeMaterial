var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var username = "";

  if(socket.username == "" || socket.username == null){
  	socket.emit('username_prompt', "");
  }

  socket.on('nickname', function(nickname){
  	socket.username = nickname;
  	io.emit('chat message', socket.username + " Connected");
  });
  socket.on('chat message', function(msg){
  	if(socket.username == "" || socket.username == null){}
  	else{ io.emit('chat message', socket.username + ": " + msg);}
  });
  socket.on('disconnect', function(){
    io.emit('chat message', socket.username + " Disconnected");	
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
