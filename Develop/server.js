// imports
const express = require('express');
const fs = require('fs');
const path = require('path');

// instantiate express and other variables
const app = express();
// I haven't been able to get heroku to work but this is supposed to do something with it
const PORT = process.env.PORT || 3301;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));

// Requests
app.post('/', (req, res) => {

});


// listen at port
app.listen(PORT, () => {
    console.log(`The server is now active on port ${PORT}.`)
})