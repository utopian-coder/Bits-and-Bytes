const express = require("express");
const { Router } = express;

const userController = require("../controllers/userController");

const router = Router();

router.route("/").post(userController.createUser).get(userController.logIn);

module.exports = router;
