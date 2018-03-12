import tokenList from "../data/tokenList";
import AppController, { requestEvent } from "../controller/AppController";

class TokenListView {
  list: Element;
  item: Element;
  itemArray: NodeList;
  data: Object;

  constructor() {
    this.list = document.getElementById('js-token-list');
    this.data = tokenList;

    this.init();
  }

  init() {
    this.render();
    this.setItem();
  }

  setItem() {
    this.itemArray = document.querySelectorAll('.js-token-list-item');

    for(let i=0; i<this.itemArray.length; ++i) {
      const item:Element = document.querySelector('.js-token-list-item:nth-child(' + (i + 1) + ')');

      item.addEventListener('click',()=>{
        const tokenID:Number = Number(item.getAttribute('data-tokenid'));

        const e:Object = {
          event: requestEvent.getTokenInfo,
          tokenID: tokenID
        };

        AppController.request(e);
      });
    }
  }

  render() {
    let res:string = "";

    for(let i in this.data) {
      res += '<li class="mdc-list-item js-token-list-item" data-tokenid="' + this.data[i].id + '">' + this.data[i].unit + '</li>';
    }

    this.list.innerHTML = res;
  }
}

export default new TokenListView();
