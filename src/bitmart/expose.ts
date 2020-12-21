import Bitmart from "./bitmart";
class Expose extends Bitmart {
  constructor(memo: string, access: string, secret: string) {
    super(memo, access, secret);
  }
  getTicker = async (symbol: string) => {
    const endpoint = symbol
      ? `/spot/v1/ticker?symbol=${symbol}`
      : "/spot/v1/ticker";
    return await this.doPublicRequest("get", endpoint);
  };
  getBalance = async () => {
    const balances = await this.doRequest(
      "get",
      "/account/v1/wallet?account_type=1",
      "account_type=1"
    );
    return balances;
  };
  placeOrder = async () => {
    const order = await this.doRequest("post", "/spot/v1/submit_order", {
      symbol: "BTC_USDT",
      side: "buy",
      type: "limit",
      size: "10",
      price: "7000",
    });
    return order;
  };
  getOrder = async () => {};
}

export default Expose;
