const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verify = async(req, res, next) => {
  // check if there is a token in header
  const token = req.header("auth-token");
  if (!token) return res.status(404).send("Access Denied");

  // verify the jwt that has been sent from postman
  try {
    const decoded = jwt.verify(token, process.env.SECRET); // verify the token & secret
    const user = await User.findOne({_id: decoded._id});
    if (!user) {
      throw new Error("User cannot find!!");
    }
    req.user = user;
    next();
  } catch (err) {
    //res.json(err);
    res.status(401).send({error: 'Authentication problem!!'})
  }
};

module.exports = verify;
