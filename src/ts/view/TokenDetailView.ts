import AppController, { requestEvent } from "../controller/AppController";
import tokenList from "../data/tokenList";

class TokenDetailView {
  name: Element;
  unit: Element;
  description: Element;
  favorite: Element;
  favoriteTrigger: Element;
  token:Object

  constructor() {
    this.name = document.getElementById('js-token-name');
    this.unit = document.getElementById('js-token-unit');
    this.description = document.getElementById('js-token-description');
    this.favorite = document.getElementById('js-token-favorite');
    this.favoriteTrigger = document.getElementById('js-token-favorite-trigger');

    // this.render(2); //test code
    this.init();
  }

  init() {

    this.favoriteTrigger.addEventListener('click', ()=>{
      const e = {
        event: requestEvent.favoriteToken,
        tokenID: Number(this.favoriteTrigger.getAttribute('data-tokenid'))
      }

      AppController.request(e);
    });
  }

  render(token:Object) {
    this.token = (token)? token: tokenList[0];

    /*
     * 型エラーあり
     */
    this.name.innerHTML = this.token.name;
    this.name.setAttribute('data-tokenid',this.token.id);
    this.unit.innerHTML = this.token.unit;
    this.description.innerHTML = this.token.description;
    this.favorite.innerHTML = (this.token.favorite)? '★': '☆';
    this.favoriteTrigger.setAttribute('data-tokenid',this.token.id);
  }
}

export default new TokenDetailView();
