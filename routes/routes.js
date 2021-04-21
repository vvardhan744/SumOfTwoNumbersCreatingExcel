var express = require('express');
const rpc = require("../controllers/controller");
var router = express.Router();
router.get("/api/task/createExcel",rpc.ExcelSum);
module.exports = router;