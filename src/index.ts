import { Module } from 'module';
import Expose from './bitmart/expose';

const test = new Expose(
   'newLocal','0dc5dd96533d88ea85aed9145ede0f94c242c494','944a87b0ce5dcc9697136d653e68835b4cdeae563af255b509ef24e00e1c0490'
  );
const func = async ()=>{
    const balance = await test.placeOrder();
    console.log("balance",balance);

}
func();

// export default Expose;