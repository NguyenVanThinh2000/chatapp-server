const { handleError, handleSuccess } = require("../../util/functional");
const User = require("../models/User");

const createUser = (req, res) => {
  const newUser = req.body;
  User.find({ email: newUser.email }, (error, user) => {
    if (error) handleError(res, "Error when create user", 500);
    if (user.length > 0) {
      handleError(res, "Email already exists", 400);
    } else {
      User.create(newUser, (error, user) => {
        if (error) handleError(res, "Error when create user", 500);
        user = user.toObject();
        delete user.password;
        handleSuccess(res, "Create user successfully", 200, user);
      });
    }
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const newUser = req.body;
  User.findByIdAndUpdate(id, newUser, { new: true }, (error, user) => {
    if (error) handleError(res, "Error when update user", 500);
    user = user.toObject();
    delete user.password;
    handleSuccess(res, "Update user successfully", 200, user);
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id, (error) => {
    if (error) handleError(res, "Error when delete user", 500);
    handleSuccess(res, "Delete user successfully", 200, null);
  });
};

const getAll = (req, res) => {
  User.find(
    {},
    { username: true, email: true, avatar: true, rooms: true },
    (error, users) => {
      if (error) handleError(res, "Error when get users", 500);
      handleSuccess(res, "Get users successfully", 200, users);
    }
  );
};

const getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id, (error, user) => {
    if (error) handleError(res, "Error when get user", 500);
    user = user.toObject();
    delete user.password;
    handleSuccess(res, "Get user successfully", 200, user);
  });
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
