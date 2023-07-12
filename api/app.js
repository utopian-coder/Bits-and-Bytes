//Third-party package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Creating express server
const app = express();

app.use(cookieParser());

//Project module imports
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

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

//Global error handling middleware
app.all("*", (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl}`);
  // err.status = "Failed";
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
