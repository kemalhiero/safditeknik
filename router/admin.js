const express = require("express");
const router = express();
const controller = require(`../controller/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

router.get("/", controller.admin.tampilDashboardAdmin);
router.get("/pelanggan", controller.admin.tampilDaftarPelanggan);
router.get("/tambahBarang", controller.admin.tampiltambahBarang);

module.exports = router;