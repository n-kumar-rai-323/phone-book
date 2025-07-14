const authRoute=require("express").Router()
const authCtrl = require("./auth.controller")
authRoute.post("/register", authCtrl.registerUser)
module.exports= authRoute