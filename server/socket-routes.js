/* ==================================================================================== */
/* This file contains the code used to for routing socket.io calls                      */
/* ==================================================================================== */
const formatMessage = require('./messages');
//var Sockets = require('./sockets');
let messages =[];
let likes = [];
var clickCount = 0;
const botName = 'MotorsGramsBOT'


var socketRouter = function(io) {
  // socket.io events and functions
  // on initial connection
    //
    
    io.on('connection', function(socket) {


      
      // to not delete 
      socket.emit('previousMessages', messages);

      console.log(`socket connected: ${socket.id}`);
      socket.emit('chat-message', formatMessage(botName, 'Welcome to MotorsGram!'))
      socket.broadcast.emit('chat-message',formatMessage(botName, 'A user has joined'));
       //If you need to do something initially
    
      
      
       socket.on('sendMessage', (data) => {
        messages.push(data);
        console.log(data);
        //Send back to everyone, including sende
        socket.broadcast.emit('receiveMessage', data);

      
       });


    socket.on('createPost', post => {
      
      console.log(post);
        //Send back to everyone, including sender
      io.emit('chat-message',formatMessage('MOTORSGRAM USER',post));
     

    
     });
     socket.on('clicked', function(data) {
      clickCount++;
    //send a message to ALL connected clients
    io.emit('buttonUpdate', clickCount);
  });
     
     

      

  });
  
    
};

module.exports.socketRouter = socketRouter;
