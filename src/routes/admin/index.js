var express = require("express");
const adminCtrl = require("../../controller/admin/adminCtrl");
var router = express.Router();

/* 필요없음 */
router.get("/", adminCtrl.adminControl);

//관리자 로그인
router.get("/login", adminCtrl.loginCtrl);

module.exports = router;
