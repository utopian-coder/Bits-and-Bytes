const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("../models/User");
const DB = process.env.DB.replace("<password>", process.env.PASSWORD);

const saltRounds = 10; //For password hashing and comparing with hashed value later

exports.signUp = async (req, res) => {
  mongoose.connect(DB);

  const { name, email, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, saltRounds);

  try {
    await User.create({
      name,
      email,
      password: passwordHash,
    });

    res.status(201).json({
      status: "success",
      message: "User registered successfully.",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `${error.message}`,
    });
  }
};

exports.logIn = async (req, res) => {
  mongoose.connect(DB);

  const { email, password } = req.body;
  console.log(req.body);
  const userDoc = await User.findOne({ email });

  if (!userDoc) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid email, User not found!",
    });
  }

  const passwordHash = userDoc.password;
  const isPasswordOk = bcrypt.compareSync(password, passwordHash);

  if (!isPasswordOk) {
    res.status(422).json({
      status: "fail",
      message: "Wrong Password",
    });
  }

  jwt.sign(
    { id: userDoc._id, name: userDoc.name, email },
    process.env.JWT_SECRET,
    { expiresIn: "180d" },
    (err, token) => {
      if (err) {
        res.status(500).json({
          status: "fail",
          message: "Loggin in failed. Try again!",
        });
      }

      res
        .cookie("token", token)
        .status(200)
        .json({
          status: "success",
          data: {
            name: userDoc.name,
            email,
            id: userDoc._id,
          },
        });
    }
  );
};

/*After logging in we need user data in context right? S
o whenever app reloads, a call to this endpoint is made from UserContext,
in request token will be included by default right? We can easily verify that token and send back data, 
we are storing {name, id, email} in jwt token. */
exports.getUserDataAtReaload = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "something went wrong",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  });
};
