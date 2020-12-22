import Bitmart from "./bitmart";
declare class BitmartModel extends Bitmart {
    constructor(memo: string, access: string, secret: string);
    getTicker: (symbol: string) => Promise<any>;
    getBalance: () => Promise<any>;
    placeOrder: (symbol: string, side: string, type: string, size: number, price: number) => Promise<any>;
    getOrder: (symbol: string, orderId: string) => Promise<any>;
    testGet: () => Promise<any>;
    testPost: () => Promise<any>;
    cancelOrder: (symbol: string, orderId: string) => Promise<any>;
    getServerTime: () => Promise<any>;
}
export default BitmartModel;
//# sourceMappingURL=BitmartModel.d.ts.map