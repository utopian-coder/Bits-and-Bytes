//Third-party package imports
const express = require("express");
const morgan = require("morgan");

//Creating express server
const app = express();

//Project module imports
const userRouter = require("./routes/userRoutes");

//Middlewares
app.use(express.json()); //Attaches request body to the req object
if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

//Routing
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json("Ok");
});

module.exports = app;
