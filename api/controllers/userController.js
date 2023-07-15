const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const DB = process.env.DB.replace("<password>", process.env.PASSWORD);

const saltRounds = 10; //For password hashing and comparing with hashed value later

exports.signUp = catchAsync(async (req, res, next) => {
  mongoose.connect(DB);

  const { name, email, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, saltRounds);

  await User.create({
    name,
    email,
    password: passwordHash,
  });

  res.status(201).json({
    status: "success",
    message: "User registered successfully.",
  });
});

exports.logIn = catchAsync(async (req, res) => {
  mongoose.connect(DB);

  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (!userDoc)
    return next(new AppError("Invalid email, User not found!", 404));

  const passwordHash = userDoc.password;
  const isPasswordOk = bcrypt.compareSync(password, passwordHash);

  if (!isPasswordOk) return next(new AppError("Wrong Password"), 422);

  jwt.sign(
    { id: userDoc._id, name: userDoc.name, email },
    process.env.JWT_SECRET,
    { expiresIn: "180d" },
    (err, token) => {
      if (err) return next(new AppError("Loggin in failed. Try again!", 500));

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
});

/*After logging in we need user data in context right? S
o whenever app reloads, a call to this endpoint is made from UserContext,
in request token will be included by default right? We can easily verify that token and send back data, 
we are storing {name, id, email} in jwt token. */
exports.getUserDataAtReaload = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(new AppError("Something went wrong", 500));

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

//Log out handler endpoint
exports.logOut = (req, res) => {
  res.cookie("token", "").status(200).json({
    status: "success",
    message: "Logged out!",
  });
};

//Update profile
exports.updateProfile = (req, res) => {
  mongoose.connect(DB);

  const { bio, linkedin, github, twitter } = req.body;
  const { id } = req.params;
  const { token } = req.cookies;

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    catchAsync(async (err, user) => {
      if (err) return next(new AppError("Something went wrong", 500));
      if (user.id != id) return next(new AppError("Invalid credentials", 403));

      const updatedUserDoc = await User.findOneAndUpdate(
        { email: user.email },
        { bio, linkedin, github, twitter },
        { new: true }
      );

      res.status(201).json({
        status: "success",
        data: {
          id: updatedUserDoc._id,
          name: updatedUserDoc.name,
          bio: updatedUserDoc.bio,
          email: updatedUserDoc.email,
          linkedin: updatedUserDoc.linkedin,
          github: updatedUserDoc.github,
          twitter: updatedUserDoc.twitter,
        },
      });
    })
  );
};
