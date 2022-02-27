// dependancies
const router = require("express").Router();
const database = require("../db/db.json");
const fs = require("fs");

// reading the database
router.get("/api/notes", (req, res) => {
  console.log({ data: database });
  res.json({ data: database });
});

router.get("/", (req, res) => {
  res.sendStatus("test");
});

// posting to DB
router.post("/api/notes", (req, res) => {
  newArr.push(note); // Add new note to array

  res.sendStatus(200);
});

module.exports = router;
