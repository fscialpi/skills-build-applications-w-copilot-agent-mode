"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRouter = void 0;
const express_1 = require("express");
const env_1 = require("../config/env");
exports.healthRouter = (0, express_1.Router)();
exports.healthRouter.get('/health', (_request, response) => {
    response.json({
        status: 'ok',
        service: 'octofit-tracker-api',
        baseUrl: (0, env_1.getBaseUrl)(),
    });
});
