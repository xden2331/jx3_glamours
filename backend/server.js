const express = require("express");
const mongoose = require("mongoose");
const app = express();
const outfits = require("./routes/api/outfits");
const uri = require("./config/keys").mongoURI;

// Connect to the database
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

require("./test/initialization")(mongoose);

app.use("/api/outfits", outfits);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`));
