const jwt = require("jsonwebtoken");

const getDataFromJWT = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

module.exports = getDataFromJWT;
