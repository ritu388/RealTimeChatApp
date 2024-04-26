const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.listen(5000, function(){
    console.log('app is listening on port 5000');
})