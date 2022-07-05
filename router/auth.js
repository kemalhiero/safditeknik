const express = require("express");
const router = express();
const controller = require(`../controller/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

router.post("/register", controller.auth.register);
router.post("/login", controller.auth.login);
router.post("/logout", controller.auth.logout);

router.get("/login", controller.auth.tampillogin);
router.get("/register", controller.auth.tampilregister); //ntar di nonaktifkan

module.exports = router;