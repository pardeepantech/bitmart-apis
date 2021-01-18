import Bitmart from "./bitmart";
declare class BitmartModel extends Bitmart {
    constructor(memo: string, access: string, secret: string);
    getTicker: (symbol: string) => Promise<any>;
    getBalance: () => Promise<any>;
    placeMarketOrder: (symbol: string, side: string, size: number) => Promise<any>;
    placeLimitOrder: (symbol: string, side: string, size: number, price: number) => Promise<any>;
    getOrder: (symbol: string, orderId: string) => Promise<any>;
    testGet: () => Promise<any>;
    testPost: () => Promise<any>;
    cancelOrder: (symbol: string, orderId: string) => Promise<any>;
    getServerTime: () => Promise<any>;
    cancelAllOrders: (symbol: string, side: string) => Promise<any>;
    getKLineData: (symbol: string,step:number,from: number,to: number) => Promise<any>;
}
export default BitmartModel;
//# sourceMappingURL=BitmartModel.d.ts.map