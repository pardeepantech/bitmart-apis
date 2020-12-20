import axios, { AxiosInstance } from "axios";
import * as cryptoJs from "crypto-js";
const qs = require("qs");
class Bitmart {
  private apiUrl: string = "https://api-cloud.bitmart.com";
  private requestHandler: any = "";
  constructor(
    private apiName: string,
    private apiAccess: string,
    private apiSecret: string
  ) {
    this.initRequestHadler();
  }
  private getSignedMessage(params: any) {
    console.log("params", params);
    return cryptoJs.HmacSHA256(
      new Date().getTime() + "#" + this.apiName + "#" + params,
      this.apiSecret
    );
  }
  initRequestHadler = async () => {
    this.requestHandler = axios.create({
      baseURL: this.apiUrl,
      timeout: 2 * 60 * 1000,
    });
    await this.requestMiddleware();
  };
  requestMiddleware = async () => {
    this.requestHandler.interceptors.request.use(
      async (config: any) => {
        config.headers["Content-Type"] = "application/json";
        if(!config.noToken){

            config.headers["X-BM-TIMESTAMP"] = new Date().getTime();
            config.headers["X-BM-KEY"] = this.apiAccess;
        }
        console.log("final hit with", config);
        return config;
      },
      (error: any) => {
        Promise.reject(error);
      }
    );
  };
  doRequest = async (method: string, endpoint: string, payload: any = null) => {
    const config: any = {
      method,
      url: endpoint,
      noToken: false,
    };
    if (payload) {
      // const ordered:any = {};
      // Object.keys(payload).sort().forEach(key => {
      //   ordered[key] = payload[key];
      // });
      if (method === "post") {
        console.log("post method", payload);
        config.data = JSON.stringify(payload);
      }
      config.headers = {
        "X-BM-SIGN": this.getSignedMessage(payload),
      };
    }
    const { data: result } = await this.requestHandler(config);
    console.log("daat", result);
    return result;
  };
  async doPublicRequest(method:string, endpoint:string, payload = null) {
    const config:any = {
      method,
      url: endpoint,
      noToken: true,
    };
    if (payload) {
      config.data = payload;
    }

    const {data: result} = await this.requestHandler(config);

    return result;
  }
}
export default Bitmart;
