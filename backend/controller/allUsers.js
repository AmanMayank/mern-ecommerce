const userModel = require("../models/userModel");

async function allUsers(req, res) {
  try {
    console.log("The current user is", req.userId);
    res.status(200).json({
      message: req.userId,
      success: true,
      error: false,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allUsers;
