const User = require("../models/User");
const userGetAll = (req, res) => {
  User.find({}, { name: true, email: true }, (error, users) => {
    res.json(users);
  });
};

const userGetById = (req, res) => {
  console.log(req);
  User.findById(req.id, (error, user) => {
    res.json(user);
  });
};
module.exports = { userGetAll };
