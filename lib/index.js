"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expose_1 = __importDefault(require("./bitmart/expose"));
const test = new expose_1.default('newLocal', '0dc5dd96533d88ea85aed9145ede0f94c242c494', '944a87b0ce5dcc9697136d653e68835b4cdeae563af255b509ef24e00e1c0490');
(() => __awaiter(void 0, void 0, void 0, function* () {
    const balance = yield test.getBalance();
    console.log("balance", balance);
}));
// export default Expose;
//# sourceMappingURL=index.js.map