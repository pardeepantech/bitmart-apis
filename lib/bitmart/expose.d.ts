import Bitmart from "./bitmart";
declare class Expose extends Bitmart {
    constructor(memo: string, access: string, secret: string);
    getTicker: (symbol: string) => Promise<any>;
}
export default Expose;
//# sourceMappingURL=expose.d.ts.map