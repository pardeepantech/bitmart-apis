import Bitmart from './bitmart/bitmart';
import BitmartModel from './bitmart/BitmartModel';

const func = async()=>{
    try{
    const obj = new BitmartModel('stageTest','261a729ea0791256846a5f154e6e4e5120a9ee00','1499046f9c294f6e2f26897e94281d00740f4f48c3a4de3cf4a326cf7e1d5fdf');
    const t = await obj.placeMarketOrder('ETH_USDT','buy',0.1);
    console.log("t",t);
    }catch(err){
        console.log("err",err);
    }
}
func();
// export default BitmartModel;