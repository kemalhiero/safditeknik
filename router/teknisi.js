const express = require("express");
const router = express();
const controller = require(`../controller/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

router.get("/", controller.teknisi.tampilDashboardTeknisi);
router.get("/perbaikan", controller.teknisi.tampilPerbaikan);

module.exports = router;