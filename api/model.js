const mongoose = require("mongoose");

const model = new mongoose.Schema({
  notes: String,
});
module.exports = mongoose.model("model", model);
