//Third-party package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Creating express server
const app = express();

//Project module imports
const userRouter = require("./routes/userRoutes");

//Middlewares
app.use(express.json()); //Attaches request body to the req object
if (process.env.NODE_ENV == "development") app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

//Routing
app.use("/api/v1/users", userRouter);

app.get("/api/v1", (req, res) => {
  res.json("Ok");
});

module.exports = app;
