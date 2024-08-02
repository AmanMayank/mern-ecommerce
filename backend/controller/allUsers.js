const userModel = require("../models/userModel");

async function allUsers(req, res) {
  try {
    console.log("The current user is", req.userId);

    const allUsers = await userModel.find();

    res.status(200).json({
      message: req.userId,
      data: allUsers,
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
