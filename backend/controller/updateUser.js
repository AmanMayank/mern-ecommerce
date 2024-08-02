const userModel = require("../models/userModel");

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId;

    const { userId, email, name, role } = req.body;

    console.log(userId, email, name, role, req.body);

    const payload = {
      ...(email && { email }),
      ...(name && { name }),
      ...(role && { role }),
    };

    const user = await userModel.findById(sessionUser);

    console.log("payload", payload);

    const updatedUser = await userModel.findByIdAndUpdate(userId, payload);

    console.log("updated USer is ", updatedUser);

    // res.json({
    //   data: updatedUser,
    //   message: "User updated",
    //   success: true,
    //   error: false,
    // });

    res.json({
      data: updatedUser,
      message: "User updated",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateUser;
