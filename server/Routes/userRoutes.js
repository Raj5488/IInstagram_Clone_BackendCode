const express = require("express");
const { userSignUp, userLogin, getUserDetails } = require("../controller/user.controller");
const { signupValidator } = require("../middleware/signupValidator");
const { loginValidator } = require("../middleware/logInValidator");
const { authenticateUser } = require("../middleware/authenticationUser");

const userRoute = express.Router();

userRoute.post("/signup",signupValidator,userSignUp);

userRoute.post("/login",logInValidator,userLogin);

userRoute.get("/",authenticationUser,getUserDetails)  


module.exports ={
    userRoute
}