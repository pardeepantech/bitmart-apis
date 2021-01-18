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
class BitmartModel extends bitmart_1.default {
    constructor(memo, access, secret) {
        super(memo, access, secret);
        this.getTicker = (symbol) => __awaiter(this, void 0, void 0, function* () {
            const endpoint = symbol
                ? `/spot/v1/ticker?symbol=${symbol}`
                : "/spot/v1/ticker";
            return yield this.publicRequest("get", endpoint);
        });
        this.getBalance = () => __awaiter(this, void 0, void 0, function* () {
            const balances = yield this.privateRequest("get", "/account/v1/wallet?account_type=1", "account_type=1");
            return balances;
        });
        this.placeMarketOrder = (symbol, side, size) => __awaiter(this, void 0, void 0, function* () {
            let notional = size;
            if (side === 'buy') {
                const ticker = yield this.getTicker(symbol);
                const lastPrice = ticker.data.tickers[0].last_price;
                notional = +(lastPrice * size).toFixed(8);
            }
            const order = yield this.privateRequest("post", "/spot/v1/submit_order", {
                "symbol": symbol,
                "side": side,
                "type": 'market',
                "size": size,
                "notional": notional
            });
            return order;
        });
        this.placeLimitOrder = (symbol, side, size, price) => __awaiter(this, void 0, void 0, function* () {
            const order = yield this.privateRequest("post", "/spot/v1/submit_order", {
                "symbol": symbol,
                "side": side,
                "type": 'limit',
                "size": size,
                "price": price,
            });
            return order;
        });
        this.getOrder = (symbol, orderId) => __awaiter(this, void 0, void 0, function* () {
            const cancelOrder = yield this.privateRequest('get', `/spot/v1/order_detail?symbol='${symbol}'&order_id=${orderId}`, `symbol='${symbol}'&order_id=${orderId}`);
            return cancelOrder;
        });
        this.testGet = () => __awaiter(this, void 0, void 0, function* () {
            const test = yield this.privateRequest('get', '/spot/v1/test-get?symbol=BTC_USDT', 'symbol=BTC_USDT');
            return test;
        });
        this.testPost = () => __awaiter(this, void 0, void 0, function* () {
            const test = yield this.privateRequest('post', '/spot/v1/test-post', { "symbol": "BTC_USDT", "price": "8600", "count": "100" });
            return test;
        });
        this.cancelOrder = (symbol, orderId) => __awaiter(this, void 0, void 0, function* () {
            const cancelOrder = yield this.privateRequest('post', '/spot/v2/cancel_order', {
                "symbol": symbol,
                "order_id": orderId
            });
            return cancelOrder;
        });
        this.getServerTime = () => __awaiter(this, void 0, void 0, function* () {
            const serverTime = yield this.publicRequest('get', '/system/time');
            return serverTime;
        });
        this.cancelAllOrders = (symbol, side) => __awaiter(this, void 0, void 0, function* () {
            const order = yield this.privateRequest("post", "/spot/v1/cancel_orders", {
                "symbol": symbol,
                "side": side
            });
            return order;
        });
        this.getKLineData = (symbol, step, from, to) => __awaiter(this, void 0, void 0, function* () {
            const kLineData = yield this.publicRequest('get', `/spot/v1/symbols/kline?symbol=${symbol}&step=${step}&from=${from}&to=${to}`);
            return kLineData;
        });
    }
}
exports.default = BitmartModel;
//# sourceMappingURL=BitmartModel.js.map