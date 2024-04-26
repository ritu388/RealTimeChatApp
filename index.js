const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DBURL  = require('./DBcofig');

mongoose.connect(DBURL.DB_URI,{ useNewUrlParser: true , useUnifiedTopology: true });

mongoose.connection.on('open', function(){
    console.log('data base is connected');
});

mongoose.connection.on('error', function(){
    console.error('data base is not connected');
});



app.listen(5000, function(){
    console.log('app is listening on port 5000');
});