import Bitmart from "./bitmart";
class BitmartModel extends Bitmart {
  constructor(memo: string, access: string, secret: string) {
    super(memo, access, secret);
  }
  getTicker = async (symbol: string) => {
    const endpoint = symbol
      ? `/spot/v1/ticker?symbol=${symbol}`
      : "/spot/v1/ticker";
    return await this.publicRequest("get", endpoint);
  };
  getBalance = async () => {
    const balances = await this.privateRequest(
      "get",
      "/account/v1/wallet?account_type=1",
      "account_type=1"
    );
    return balances;
  };
  placeMarketOrder = async(symbol:string,side:string,size:number)=>{
    let notional:number = size;
    if(side === 'buy'){
      const ticker = await this.getTicker(symbol);
      const lastPrice = ticker.data.tickers[0].last_price;
      notional = +(lastPrice * size).toFixed(8);
    }
    const order = await this.privateRequest("post", "/spot/v1/submit_order", {
      "symbol": symbol,
      "side": side,
      "type": 'market',
      "size": size,
      "notional":notional
    });
    return order;
  }
  placeLimitOrder = async (symbol:string,side:string,size:number,price:number) => {
    const order = await this.privateRequest("post", "/spot/v1/submit_order", {
      "symbol": symbol,
      "side": side,
      "type": 'limit',
      "size": size,
      "price": price,
    });
    return order;
  };
  getOrder = async (symbol:string,orderId:string) => {
    const cancelOrder = await this.privateRequest('get',`/spot/v1/order_detail?symbol='${symbol}'&order_id=${orderId}`,`symbol='${symbol}'&order_id=${orderId}`);
    return cancelOrder;
  };
  testGet = async()=>{
    const test = await this.privateRequest('get','/spot/v1/test-get?symbol=BTC_USDT','symbol=BTC_USDT');
    return test;
  }
  testPost = async () =>{
    const test = await this.privateRequest('post','/spot/v1/test-post',{"symbol":"BTC_USDT","price":"8600","count":"100"});
    return test;
  }
  cancelOrder = async(symbol:string,orderId:string)=>{
    const cancelOrder = await this.privateRequest('post','/spot/v2/cancel_order',
    {
      "symbol": symbol,
      "order_id":orderId
    });
    return cancelOrder;
  }
  getServerTime = async()=>{
    const serverTime = await this.publicRequest('get','/system/time');
    return serverTime;
  }
  cancelAllOrders = async(symbol:string,side:string)=>{
    const order = await this.privateRequest("post", "/spot/v1/cancel_orders", {
      "symbol":symbol,
      "side":side
    });
    return order;
  }
  getKLineData = async (symbol: string,step:number,from: number,to: number) => { 
    const kLineData = await this.publicRequest('get', `/spot/v1/symbols/kline?symbol=${symbol}&step=${step}&from=${from}&to=${to}`);
    return kLineData;
  };
}

export default BitmartModel;
