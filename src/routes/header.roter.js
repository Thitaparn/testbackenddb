const expres = require("express");
const router = expres.Router();
const app = expres();
const Header = require("../controller/header.controller");

router.get("/name", Header.GetHeader);

app.use("/header", router);

module.exports = app;
