"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoUri = exports.port = void 0;
exports.getBaseUrl = getBaseUrl;
exports.port = Number(process.env.PORT ?? 8000);
exports.mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
function getBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : `http://localhost:${exports.port}`;
}
