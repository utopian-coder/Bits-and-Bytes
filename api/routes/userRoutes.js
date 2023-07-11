const express = require("express");
const { Router } = express;

const userController = require("../controllers/userController");

const router = Router();

router
  .route("/")
  .post(userController.signUp)
  .get(userController.getUserDataAtReaload);

router.route("/log-in").post(userController.logIn);

module.exports = router;
