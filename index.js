const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DBURL  = require('./DBcofig');
const bodyParser = require('body-parser');
const Router = require('./Routes/auth.route');

mongoose.connect(DBURL.DB_URI,{ useNewUrlParser: true , useUnifiedTopology: true });

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(Router);

mongoose.connection.on('open', function(){
    console.log('data base is connected');
});

mongoose.connection.on('error', function(){
    console.error('data base is not connected');
});



app.listen(5000, function(){
    console.log('app is listening on port 5000');
});