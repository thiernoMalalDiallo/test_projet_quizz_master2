"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//const PORT = 8000;
app_1.default.listen(process.env.PORT || 8000, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map