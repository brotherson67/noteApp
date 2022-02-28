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
  res.send("test");
});

// posting to DB
router.post("/api/notes", (req, res) => {
  newArr = database ? (newArr = database) : (newArr = []);
  newArr.push(req.body);
  fs.writeFile("../db/db.json", JSON.stringify(newArr), (err) => {
    console.log("there was an error");
  });
  res.sendStatus(200);
  res.json();
});

module.exports = router;
