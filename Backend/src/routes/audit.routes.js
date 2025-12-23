const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const audit = require("../controllers/audit.controller");

router.get("/", auth, audit.getHistory);

module.exports = router;
