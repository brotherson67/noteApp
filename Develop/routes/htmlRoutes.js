const router = require("express").Router();
const path = require("path");

// Requests
// index will be at root
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
// notes will be at notes path
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

// reading the database
router.get("/notes", (req, res) => {
  console.log({ data: database });
  res.json({ data: database });
});

router.get("/", (req, res) => {
  res.sendStatus("test");
});

// posting to DB
router.post("/api/notes", (req, res) => {
  newArr = notes ? (newArr = notes) : (newArr = []); // Create note array
  newArr.push(note); // Add new note to array
  fs.writeFile("./data/db.json", JSON.stringify(newArr), (err) => {
    // Create a new database file with array
    if (err) throw err;
    console.log("added");
  });
  res.sendStatus(200);
});

module.exports = router;
