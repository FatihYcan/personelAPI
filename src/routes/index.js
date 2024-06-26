"use strict";

/* EXPRESS - Personnel API */

const router = require("express").Router();

//? /auth
router.use("/auth", require("./auth.router"));

//? /tokens
router.use("/tokens", require("./token.router"));

//? /personnels
router.use("/personnels", require("./personnel.router"));

//? /departments
router.use("/departments", require("./department.router"));

module.exports = router;
