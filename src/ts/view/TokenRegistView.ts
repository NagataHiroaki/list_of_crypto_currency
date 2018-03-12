import AppController, { requestEvent } from "../controller/AppController";

class TokenRegistView {
  formOpenTrigger: Element;
  cancelTrigger: Element;
  addTrigger: Element;

  constructor() {
    this.formOpenTrigger = document.getElementById('js-regist-token-trigger');
    this.cancelTrigger = document.getElementById('js-regist-token-cancel');
    this.addTrigger = document.getElementById('js-regist-token-add');

    this.init();
  }

  init() {

    this.formOpenTrigger.addEventListener('click',()=>{
      const e = {
        event: requestEvent.registToken
      }
      AppController.request(e);
    });

    this.cancelTrigger.addEventListener('click',()=>{
      const e = {
        event: requestEvent.registTokenCancel
      }
      AppController.request(e);
    });

    this.addTrigger.addEventListener('click',()=>{
      const e = {
        event: requestEvent.registTokenAdd
      }
      AppController.request(e);
    });
  }
}

export default new TokenRegistView();
