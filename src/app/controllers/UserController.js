const User = require("../models/User");
const createUser = (req, res) => {
  User.find({}, { name: true, email: true }, (error, users) => {
    res.json(users);
  });
};
const getAll = (req, res) => {
  User.find({}, { name: true, email: true }, (error, users) => {
    res.json(users);
  });
};

const getUserById = (req, res) => {
  console.log(req.body);
  User.findById(req.body.id, (error, user) => {
    res.json(user);
  });
};
module.exports = { getAll, getUserById, createUser };
