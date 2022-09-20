"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = __importDefault(require("@wdio/cli"));
const wdio = new cli_1.default('build/wdio.conf.js', {});
wdio.run().then((exitCode) => {
    process.exit(exitCode);
}, (error) => {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
});
//# sourceMappingURL=run.js.map