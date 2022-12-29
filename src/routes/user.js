const express = require("express");
const router = express.Router();

const { userGetAll } = require("../app/controllers/UserController");

router.use("/getAll", userGetAll);
router.use("/getUser", userGetAll);

module.exports = router;
