const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  email: String,
  password: String || null,
  avatar: String || "",
  rooms: Array || null,
});

module.exports = mongoose.model("User", User);
