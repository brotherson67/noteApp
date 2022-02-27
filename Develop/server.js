// imports
const express = require("express");
const fs = require("fs");
const path = require("path");

// instantiate express and other variables
const app = express();
const PORT = process.env.PORT || 3301;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`The server is now active on port ${PORT}.`);
});
