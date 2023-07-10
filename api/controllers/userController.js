const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const saltRounds = 10; //For password hashing and comparing with hashed value later

exports.createUser = async (req, res) => {
  console.log(req.body);
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
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (!userDoc) {
    res.status(404).json({
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
    { id: userDoc._id, email, password },
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
          status: "Success",
          data: {
            name: userDoc.name,
            email,
            id: userDoc._id,
          },
        });
    }
  );
};
