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
const BitmartModel_1 = __importDefault(require("./bitmart/BitmartModel"));
const func = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const obj = new BitmartModel_1.default('stageTest', '261a729ea0791256846a5f154e6e4e5120a9ee00', '1499046f9c294f6e2f26897e94281d00740f4f48c3a4de3cf4a326cf7e1d5fdf');
        const t = yield obj.placeMarketOrder('ETH_USDT', 'buy', 0.1);
        console.log("t", t);
    }
    catch (err) {
        console.log("err", err);
    }
});
func();
// export default BitmartModel;
//# sourceMappingURL=index.js.map