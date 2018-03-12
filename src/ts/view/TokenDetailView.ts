class TokenDetailView {
  name: Element;
  unit: Element;
  description: Element;

  constructor() {
    this.name = document.getElementById('js-token-name');
    this.unit = document.getElementById('js-token-unit');
    this.description = document.getElementById('js-token-description');

    // this.render(2); //test code
  }

  render(token:Object) {
    /*
     * 型エラーあり
     */
    this.name.innerHTML = token.name;
    this.name.dataset.tokenid = token.id;
    this.unit.innerHTML = token.unit;
    this.description.innerHTML = token.description;
  }
}

export default new TokenDetailView();
