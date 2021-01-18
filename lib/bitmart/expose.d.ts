import Bitmart from "./bitmart";
declare class Expose extends Bitmart {
    constructor(memo: string, access: string, secret: string);
    getTicker: (symbol: string) => Promise<any>;
    getBalance: () => Promise<void>;
    placeOrder: () => Promise<void>;
    getOrder: () => Promise<void>;
    getKLineData: () => Promise<void>;
}
export default Expose;
//# sourceMappingURL=expose.d.ts.map