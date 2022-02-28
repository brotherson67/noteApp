// dependancies
const router = require("express").Router();
const database = require("../db/db.json");
const fs = require("fs");

// reading the database
router.get("/notes", (req, res) => {
  res.json(database);
});

router.get("/", (req, res) => {
  res.json("test");
});

// posting to DB
router.post("/notes", (req, res) => {
  newArr = database ? (newArr = database) : (newArr = []);
  newArr.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(newArr), (err) => {
    console.log(err);
  });
  res.sendStatus(200);
  res.json();
});

module.exports = router;
