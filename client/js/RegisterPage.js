$('#Register').click(function(){
    
    var email =$('#email').val();
    var password =$('#password').val();
    
    var jsonString = {email: email , password: password};
    
    $.ajax({
        url: 'http://localhost:5000' + "/Register",
        type: "post", 
        data: jsonString,
        success: function(response){
            
            alert(response);
            
        },

        error: function(err){
            alert("could  not resgister in " + err)
        }
    
    });
   
});