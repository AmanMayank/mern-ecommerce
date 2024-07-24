const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSignup");
const userSignInController = require("../controller/userSignIn");
const userDetailController = require("../controller/userDetail");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailController);
router.post("/logout", userLogout);

//Admin-Panel
router.get("/all-users", authToken, allUsers);

module.exports = router;
