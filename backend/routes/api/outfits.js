const express = require("express");
const router = express.Router();

const Outfit = require("../../models/Outfit");

router.get("/", (req, res) => {
  Outfit.find({})
    .then(docs => {
      res.json(docs);
    })
    .catch(err => console.log(err));
});

module.exports = router;
