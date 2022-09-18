const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  itemId: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Item = mongoose.model("Item", schema);

module.exports = {
  Item,
};
