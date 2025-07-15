const express = require("express");
const routerConfig = require("./router.config");
const app =express()

// Body parsers
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/",routerConfig )
module.exports = app