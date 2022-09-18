const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  userName: { type: String, unique: true },
  encryptedPassword: String,
  exp: { type: Number, default: 0 },
  maxHP: { type: Number, default: 10 },
  hp: { type: Number, default: 10 },
  str: { type: Number, default: 5 },
  def: { type: Number, default: 5 },
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  battleTurn: { type: Number, default: 0 },
  battleGiveUp: { type: Boolean, default: false },
  randomStatNum: { type: Number, default: 0 },
});

schema.methods.incrementHP = function (val) {
  const hp = this.HP + val;
  this.HP = Math.min(Math.max(0, hp), this.maxHP);
};

const Player = mongoose.model("Player", schema);

module.exports = {
  Player,
};
