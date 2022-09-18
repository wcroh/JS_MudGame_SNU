const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  id: Number,
  str: Number,
  def: Number,
  hp: Number,
});

const Monster = mongoose.model("Monster", schema);

module.exports = {
  Monster,
};
