"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const axios_1 = __importDefault(require("axios"));
const cryptoJs = __importStar(require("crypto-js"));
const qs = require("qs");
class Bitmart {
    constructor(apiName, apiAccess, apiSecret) {
        this.apiName = apiName;
        this.apiAccess = apiAccess;
        this.apiSecret = apiSecret;
        this.apiUrl = "https://api-cloud.bitmart.com";
        this.requestHandler = "";
        this.timestamp = '';
        this.initRequestHadler = () => __awaiter(this, void 0, void 0, function* () {
            this.requestHandler = axios_1.default.create({
                baseURL: this.apiUrl,
                timeout: 2 * 60 * 1000,
            });
            yield this.requestMiddleware();
        });
        this.requestMiddleware = () => __awaiter(this, void 0, void 0, function* () {
            this.requestHandler.interceptors.request.use((config) => __awaiter(this, void 0, void 0, function* () {
                config.headers["Content-Type"] = "application/json";
                if (!config.noToken) {
                    config.headers["X-BM-TIMESTAMP"] = this.timestamp;
                    config.headers["X-BM-KEY"] = this.apiAccess;
                }
                console.log("final hit with", config);
                return config;
            }), (error) => {
                Promise.reject(error);
            });
        });
        this.privateRequest = (method, endpoint, payload = null) => __awaiter(this, void 0, void 0, function* () {
            this.timestamp = Date.now().toString();
            console.log("timestamp from server", this.timestamp);
            const config = {
                method,
                url: endpoint,
                noToken: false,
            };
            if (payload) {
                if (method === "post") {
                    console.log("post method", payload);
                    config.data = JSON.stringify(payload);
                }
                let authString = (method === 'post') ? JSON.stringify(payload) : qs.stringify(payload);
                config.headers = {
                    "X-BM-SIGN": this.getSignedMessage(authString),
                };
            }
            const { data: result } = yield this.requestHandler(config);
            console.log("daat", result);
            return result;
        });
        this.initRequestHadler();
    }
    getSignedMessage(params) {
        console.log("params", params);
        //  return   crypto.createHmac("SHA256", this.apiSecret).update(this.timestamp  + "#" + this.apiName + "#" + params).digest("hex");
        return cryptoJs.HmacSHA256(this.timestamp + "#" + this.apiName + "#" + params, this.apiSecret).toString();
    }
    publicRequest(method, endpoint, payload = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                method,
                url: endpoint,
                noToken: true,
            };
            if (payload) {
                config.data = payload;
            }
            const { data: result } = yield this.requestHandler(config);
            return result;
        });
    }
}
exports.default = Bitmart;
//# sourceMappingURL=bitmart.js.map