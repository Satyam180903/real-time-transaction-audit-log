const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const transfer = require("../controllers/transfer.controller");

router.post("/", auth, transfer.transferAmount);

module.exports = router;
