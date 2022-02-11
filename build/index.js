"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./config");
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(require('./router/index'));
// eslint-disable-next-line no-console
app.listen(config_1.port, function () { return console.log("Server is listening on port " + config_1.port + "!"); });
//# sourceMappingURL=index.js.map