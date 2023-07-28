//Third-party package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Creating express server
const app = express();

//Middlewares
app.use(cookieParser());
app.use(express.json()); //Attaches request body to the req object

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);

//Project module imports
const userRouter = require("./routes/userRoutes");
const courseRouter = require("./routes/courseRoutes");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

//Routing mf
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

//Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
