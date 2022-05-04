/* ==================================================================================== */
/* This file contains the javascript code specific to the chat page.                    */
/* ==================================================================================== */


const messageForm = document.getElementById('chat');
const usermessage = document.getElementById('message-input');
const username = document.getElementById('username');
const chatMessagesBox = document.querySelector('.messages');
/*==========================================================================================================*/
/* This function prepares the page for use upon initial load or refresh.                                    */
/*==========================================================================================================*/
function page_initialize() {

  //connect the socket
  if (socket === undefined) {
    socket = io.connect("http://localhost:5000");
  }

  defineSockets();

}
// to display message in the display
function renderMessages(message){
  $('.messages').append('<div class="message"><strong>'+ message.author+'</strong>: '+ message.message +' </div>')
  chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
}

// TO SAVE THE MESSAGES AND NOT DELETE WHEN PAGE IS REFRESH
socket.on('previousMessages', function(message){
  for(message of message){
    renderMessages(message);
    chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
  }
})


socket.on('chat-message', data =>{
  console.log(data)
});

//message from server
socket.on('receiveMessage', function(message){
 renderMessages(message);
});


// message submit
$('#chat').submit(function(event){
  event.preventDefault();

  var author = $('input[name=username]').val();
  var message = $('input[name=message]').val();
  
  if (author.length && message.length) {
    var messageData = {
      author: author,
      message: message,
    };
    renderMessages(messageData);
    socket.emit('sendMessage' , messageData);
    
  }
})





