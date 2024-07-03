const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
var jwt = require("jsonwebtoken");

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      try {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: 60 * 60 * 12 }
        );

        const tokenOption = {
          httpOnly: true,
          secure: true,
        };

        res.cookie("token", token, tokenOption).json({
          message: "Login successful",
          data: token,
          success: true,
          error: false,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      throw new Error("Please check password");
    }

    console.log("user", checkPassword);

    if (!user) {
      throw new Error("User not found");
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
