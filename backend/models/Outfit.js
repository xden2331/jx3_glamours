const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
  imgUrl: {
    type: String,
    required: true
  }
});

module.exports = Outfit = mongoose.model("outfit", OutfitSchema);
