const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const validateAccessToken = asyncHandler(async (req, res, next) => {
  try {
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      let token = authHeader.split(" ")[1];
      
      if (!token) {
        res.status(401);
        throw new Error("User is not authorized or token is missing!");
      }
      //   verify token
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
        if (err) {
          res.status(401);
          throw new Error("User is not authorized");
        } else {
          const email = decoded.user.email;
          
          const user = await User.findOne({email})
          req.user = user;
          
          next();
        }
      });
    } else {
      res.status(400);
      throw new Error("Access Token not found");
    }
  } catch (error) {
    res.status(500);
    throw new Error("An error occured: ", error);
  }
});

module.exports = { validateAccessToken };