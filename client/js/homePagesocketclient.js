const postForm = document.getElementById('create-post');
const chatMessage = document.querySelector('.messages');
const likeBtn = document.querySelector('.likeButton');
let countLike = document.querySelector('.likeCOUNTER');
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

//messages from server
socket.on('chat-message', post =>{
  console.log(post)
  outputMessage(post);
  // Scroll down

  chatMessage.scrollTop = chatMessage.scrollHeight;
  
});



// Message Submit
postForm.addEventListener('submit', event =>{
  event.preventDefault();

// Message text
  const post = event.target.elements.post.value;
  
  // Send the  message to the server
  socket.emit('createPost', post);

  // clear message inputs

  event.target.elements.post.value = '';
  event.target.elements.post.focus();

});


  function buttonClicked(){
    
    socket.emit('clicked');

    }
    
socket.on('buttonUpdate',function(data){
  //$(data.id).trigger('click');
  document.getElementById("buttonCount").innerHTML = 'LIKES:'+ data ;
      
});




  
// Output Message  and the like function

function outputMessage(data){
  
    const div = document.createElement('div');
    
  
    const likes = document.getElementById('buttonCount');
    
    div.classList.add('MessagesBox');
    div.innerHTML =`<p class="meta">${data.username} <span>${data.time}</span></p>${data.text} 
    <button onclick="buttonClicked()" class= "likeBtn">Like</button>`; 
    
    document.querySelector('.messages').append(div);
    
   
    document.querySelector('.messages').append(likes);
    
    

    
} 




//