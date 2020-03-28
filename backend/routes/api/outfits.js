const express = require("express");
const router = express.Router();
const isEmpty = require("is-empty");

const Outfit = require("../../models/Outfit");

buildFilter = query => {
  const filter = {};
  if (!isEmpty(query.clan)) {
    filter.clan = { $in: query.clan };
  }
  if (!isEmpty(query.bodyType)) {
    filter.bodyType = { $in: query.bodyType };
  }
  return filter;
};

router.get("/", (req, res) => {
  console.log(req.query);
  const filter = buildFilter(req.query);

  Outfit.find(filter)
    .then(docs => {
      res.json(docs);
    })
    .catch(err => console.log(err));
});

module.exports = router;
