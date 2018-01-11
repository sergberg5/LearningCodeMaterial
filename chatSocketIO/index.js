var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('port', 3000);
app.use('/www', express.static(__dirname + '/www'));
// Routing NOT WORKING
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.emit('message', 'FROM: SERVER TO: ALL CLIENTS');
  });
});
