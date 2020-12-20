import Bitmart from "./bitmart";
class Expose extends Bitmart {
  constructor(memo: string, access: string, secret: string) {
    super(memo, access, secret);
  }
  getTicker = async(symbol:string) =>{
    const endpoint = symbol ? `/spot/v1/ticker?symbol=${symbol}` : '/spot/v1/ticker';
    return await this.doPublicRequest('get',endpoint)
  }
}

export default Expose;
