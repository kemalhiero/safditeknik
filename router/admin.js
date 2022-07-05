const express = require("express");
const router = express();
const controller = require(`../controller/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

router.get("/", controller.admin.tampilDashboardAdmin);
router.get("/pelanggan", controller.admin.tampilDaftarPelanggan);
router.get("/tambahBarang:id", controller.admin.tampiltambahBarang);

router.post("/tambahPelanggan", controller.admin.tambahPelanggan);
router.post("/tambahBarang", controller.admin.tambahBarang);

module.exports = router;