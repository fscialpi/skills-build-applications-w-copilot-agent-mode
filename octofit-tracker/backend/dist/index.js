"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const mongo_1 = require("./config/mongo");
const env_1 = require("./config/env");
dotenv_1.default.config();
async function main() {
    await (0, mongo_1.connectDatabase)();
    const app = (0, app_1.createApp)();
    app.listen(env_1.port, () => {
        console.log(`OctoFit Tracker API listening on port ${env_1.port}`);
    });
}
main().catch((error) => {
    console.error('Failed to start OctoFit Tracker API:', error);
    process.exit(1);
});
