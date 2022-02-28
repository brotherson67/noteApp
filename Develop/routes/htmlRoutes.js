const router = require("express").Router();
const path = require("path");

// Requests
// index will be at root
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/index.html"));
});
// notes will be at notes path
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/notes.html"));
});

module.exports = router;
