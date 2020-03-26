const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Outfit = mongoose.model("outfit", OutfitSchema);
