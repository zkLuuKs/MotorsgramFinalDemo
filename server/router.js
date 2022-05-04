const path = require('path');
const express = require('express');
const app = express();


// Page Listeners
var router = function(app){

    app.get("/HomePage" , function(req, res){
        
            res.status(200).sendFile(path.join(__dirname + "/../client/HomePage.html"));
            
    });
    app.get('/RegisterPage', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/RegisterPage.html"));
       
    });

    app.get('/HomePageChat', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/HomePageChat.html"));

    });
    app.get("/" , function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/LoginPage.html"));
    });
    

    app.get("/HomePageNewChat" , function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/pikadeboi.html"));
    });

};
module.exports = router; 
