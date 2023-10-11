"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const special_routes_1 = __importDefault(require("./special.routes"));
const router = (0, express_1.Router)();
router.use('/api', auth_routes_1.default);
router.use('/api', special_routes_1.default);
exports.default = router;
