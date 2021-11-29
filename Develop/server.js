// imports
const express = require('express');

// instantiate express and other variables
const app = express();
const PORT = process.env.PORT || 3301;


app.listen(PORT, () => {
    console.log(`The server is now active on port ${PORT}.`)
})