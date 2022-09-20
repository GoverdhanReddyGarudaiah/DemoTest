"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_framework_1 = require("@wdio/cucumber-framework");
const wdio_cucumberjs_json_reporter_1 = __importDefault(require("wdio-cucumberjs-json-reporter"));
(0, cucumber_framework_1.Given)(/^First steps$/, async () => {
    await browser.url('https://google.com');
    wdio_cucumberjs_json_reporter_1.default.attach(await browser.getUrl(), 'image/png');
});
//# sourceMappingURL=sample.js.map