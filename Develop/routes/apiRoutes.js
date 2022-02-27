// dependancies
const router = require("express").Router();
const database = require("../db/db.json");

// reading the database
router.get("/notes", (req, res) => {
  console.log({ data: database });
  res.json({ data: database });
});
// posting to DB
router.post("/api/notes", (req, res) => {
  // this route will be initiated when the save button is clicked
  database.push("something is being pushed");
  console.log("Something should be posted now");
  res.sendStatus(200);
});
