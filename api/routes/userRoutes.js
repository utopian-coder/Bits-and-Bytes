const express = require("express");
const { Router } = express;

const userController = require("../controllers/userController");

const router = Router();

router
  .route("/")
  .post(userController.signUp)
  .get(userController.getUserDataAtReaload);

router.route("/:id").put(userController.updateProfile);

router.route("/log-in").post(userController.logIn);
router.route("/log-out").post(userController.logOut);

module.exports = router;
