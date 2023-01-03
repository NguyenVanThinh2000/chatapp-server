const multer = require("multer");
const upload = multer();
const express = require("express");
const router = express.Router();

const {
  getAll,
  getUserById,
  createUser,
} = require("../app/controllers/UserController");

router.use("/createUser", upload.array(), createUser);
router.use("/getAll", getAll);
router.post("/getUserById", upload.array(), getUserById);

module.exports = router;
