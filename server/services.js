
const mysql = require('mysql');
const express = require('express');


const bodyParser  = require('body-parser');

const e = require('cors');
const encoder = bodyParser.urlencoded();



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lucas203842',
    database: 'moto'
});
// connect to the satabase
connection.connect(function(err) {
    if(err){
        throw err;
    }

    console.log(`connected to MySQL!`);
});


var services = function(app){
    app.post('/Register',  function(req, res){
        console.log('in write-record');

        var data = {
            email:  req.body.email,
            password: req.body.password
            
        };
        
        console.log(data);
        connection.query("INSERT INTO accounts SET ?", data, function(err, results){
            if(err){
                return res.status(201).send(JSON.stringify({msg:"FAIL TO REGISTER EMAIL ALREDY BEEN USED" + err}));
                
            }
            else{
                return res.status(201).send(JSON.stringify({msg: "successfully registered"}));
                
            }

            

        });

});
app.post('/LoginPage',encoder, function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    
        connection.query('SELECT * FROM accounts WHERE password = ? and email = ?',[password, email], 
        function(error,results,fiels){

            if (results.length > 0) {
            // Redirect to home page
            res.redirect('/HomePage');
            
            }

            
            else{
                
                res.redirect('/');
                
                
            }
            
            res.end();
        });
       
    });


};

module.exports = services;

