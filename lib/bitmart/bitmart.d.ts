declare class Bitmart {
    private apiName;
    private apiAccess;
    private apiSecret;
    private apiUrl;
    private requestHandler;
    private timestamp;
    constructor(apiName: string, apiAccess: string, apiSecret: string);
    private getSignedMessage;
    private initRequestHadler;
    private requestMiddleware;
    protected privateRequest: (method: string, endpoint: string, payload?: any) => Promise<any>;
    protected publicRequest(method: string, endpoint: string, payload?: null): Promise<any>;
}
export default Bitmart;
//# sourceMappingURL=bitmart.d.ts.map