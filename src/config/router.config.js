const authRoute = require("../modules/auth/auth.router")

const routerConfig = require("express").Router()



routerConfig.use("/auth",authRoute)

module.exports= routerConfig