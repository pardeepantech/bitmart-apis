declare class Bitmart {
    private apiName;
    private apiAccess;
    private apiSecret;
    private apiUrl;
    private requestHandler;
    constructor(apiName: string, apiAccess: string, apiSecret: string);
    private getSignedMessage;
    private initRequestHadler;
    private requestMiddleware;
    protected doRequest: (method: string, endpoint: string, payload?: any) => Promise<any>;
    protected doPublicRequest(method: string, endpoint: string, payload?: null): Promise<any>;
}
export default Bitmart;
//# sourceMappingURL=bitmart.d.ts.map