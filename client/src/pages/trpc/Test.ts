import LibTest from '../../lib/LibTest';
import { trpc } from '../../utils/trpc';

const Test = {
  /**
   * createUser
   * @param
   *
   * @return
   */ 
  createUser: async function() {
    try{
      const createdUser = await trpc.userCreate.mutate({ name: 'sachinraja' });
    } catch (e) {
        console.error(e);
    }
  },
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      const valid = await LibTest.validLogin();
console.log("valid=", valid);
      if(valid === false) {
//        alert("NG, valid Login");
      }
      //btn
      const button: any = document.querySelector('#btn_save');
      button.addEventListener('click', () => {
        this.createUser();
      });       
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Test.startProc();

export default Test;
