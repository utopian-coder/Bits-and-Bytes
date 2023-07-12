//Third-party imports
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Third-party middleware
dotenv.config({ path: "./config.env" });

//Project module imports
const app = require("./app");

//Connecting to the database
//  const DB = process.env.DB.replace("<password>", process.env.PASSWORD);
// mongoose.connect(DB).then(() => {
//   console.log("DB connection successfull.");
// });

//Listening to the server
app.listen(4000, () => {
  console.log("Server is listening on PORT 4000");
});
