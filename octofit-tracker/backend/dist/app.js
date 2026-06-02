"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const health_1 = require("./routes/health");
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.get('/api', (_request, response) => {
        response.json({
            status: 'ok',
            service: 'octofit-tracker-api',
        });
    });
    app.use('/api', health_1.healthRouter);
    return app;
}
