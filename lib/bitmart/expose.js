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
const bitmart_1 = __importDefault(require("./bitmart"));
class Expose extends bitmart_1.default {
    constructor(memo, access, secret) {
        super(memo, access, secret);
        this.getTicker = (symbol) => __awaiter(this, void 0, void 0, function* () {
            const endpoint = symbol ? `/spot/v1/ticker?symbol=${symbol}` : '/spot/v1/ticker';
            return yield this.doPublicRequest('get', endpoint);
        });
        this.getBalance = () => __awaiter(this, void 0, void 0, function* () {
            const balances = yield this.doRequest('get', '/account/v1/wallet?account_type=1', 'account_type=1');
        });
        this.placeOrder = () => __awaiter(this, void 0, void 0, function* () {
        });
        this.getOrder = () => __awaiter(this, void 0, void 0, function* () {
        });
        this.getKLineData = (symbol, step, from, to) => __awaiter(this, void 0, void 0, function* () {
            const kLineData = yield this.doPublicRequest('get', `/spot/v1/symbols/kline?symbol=${symbol}&step=${step}&from=${from}&to=${to}`);
            return kLineData;
        });
    }
}
exports.default = Expose;
//# sourceMappingURL=expose.js.map