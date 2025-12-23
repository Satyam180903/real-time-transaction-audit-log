const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/transfer", require("./routes/transfer.routes"));
app.use("/audit", require("./routes/audit.routes"));

module.exports = app;
