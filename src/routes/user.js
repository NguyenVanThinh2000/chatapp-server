const multer = require("multer");
const upload = multer();
const express = require("express");
const router = express.Router();

const {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../app/controllers/UserController");

router.post("/create", upload.array(), createUser);
router.patch("/:id", upload.array(), updateUser);
router.delete("/:id", deleteUser);

router.use("/getAll", getAll);
router.get("/:id", getUserById);

module.exports = router;
