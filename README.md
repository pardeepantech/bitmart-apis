# bitmart-api-model

Use this Package to interact with Birmart Pro new api.

## Installation

```bash
npm i bitmart-api-model
```

## Import Package

```node
import BitmartModel from "bitmart-api-model";
const obj = new BitmartModel("memo", "access_token", "api_secret");
```

## Usage

```node
const getServerTime = await obj.getServerTime();
const testGetRequest = await obj.testGet();
const testPostRequest = await obj.testPost();
const ticker = await obj.getTicker("BTC_USDT");
const balance = await obj.getBalance();
const submitLimitOrder = await obj.placeLimitOrder(
  "SYMBOL",
  "buy|sell",
  "QTY",
  "PRICE"
);
const submitMarketOrder = await obj.placeMarketOrder(
  "SYMBOL",
  "buy|sell",
  "QTY"
);
const getOrder = await obj.getOrder("SYMBOL", "ORDER_ID");
const cancelOrder = await obj.cancelOrder("SYMBOL", "ORDER_ID");
const cancelAllOrders = await obj.cancelAllOrders("SYMBOL", "buy|sell");
const kLineData = await obj.getKLineData("SYMBOL", "step", "from", "to");
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

Pardeep Kumar <br/>
Git: https://github.com/pardeepantech

## GIT REPO

Github: https://github.com/pardeepantech/bitmart-apis

## License

[MIT]
