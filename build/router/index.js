"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.use('/user', require('./user/index'));
module.exports = router;
//# sourceMappingURL=index.js.map