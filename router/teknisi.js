const express = require("express");
const router = express();
const controller = require(`../controllers/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

// dn commit se lu a wkwkw
// jadih gas

module.exports = router;