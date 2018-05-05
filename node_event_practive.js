var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

var otherEventHandler =  function(){
  console.log('This is Julie');;
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//Assign the event handler to new event:
eventEmitter.on('test', otherEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('test');

