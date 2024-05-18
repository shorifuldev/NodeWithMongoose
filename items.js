
const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    ItemName: String,
    Category: String,
    Department: String,
    Price: Number,
    Brand: String,
  });

  module.exports = mongoose.model("items", itemsSchema);

  