var socket = io();
    
$('form').submit(function(){
  //socket.emit('chat message', $('#m').val());
  socket.emit('message','FROM: CLIENT TO: SERVER');
  $('#m').val('');
  return false;
  });
  
  socket.on('message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
});