const express = require("express");
require("./mongo.connection")
const routerConfig = require("./router.config");
const errorHandling = require("../middlewares/error-handling-middleware");
const app =express()

// Body parsers
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/",routerConfig )

app.use((req, res, next) => {
  next({ code: 404, message: "Not Found", status: "ERR_NOT_FOUND" });
});

// Error handler
app.use(errorHandling)
module.exports = app