import tokenList from "../data/tokenList";
import AppController, { responseEvent } from "../controller/AppController";

class TokenModel {
  constructor(){

  }

  getTokenInfo(tokenID:Number) {
    for(let i in tokenList) {
      if(tokenList[i].id === tokenID) {
        this.viewTokenDetail(tokenList[i]);
      }
    }
  }

  viewTokenDetail(token:Object) {
    const e:Object = {
      event: responseEvent.viewDetail,
      token: token
    }

    AppController.response(e);
  }

  registToken() {
    let name = document.forms['registForm'].elements['name'];
    let unit = document.forms['registForm'].elements['unit'];
    let description = document.forms['registForm'].elements['description'];

    if(name.value === "" || unit.value === "") return;

    let nextTokenId = 0;
    let check:boolean = false;
    while(!check) {
      check = !tokenList.some(token => token.id === nextTokenId);
      ++nextTokenId;
    }

    const token = {
      "id": nextTokenId,
      "name": name.value,
      "unit": unit.value,
      "description": description.value,
      "favorite": false
    }

    tokenList.push(token);

    // console.log(tokenList);

    const e = {
      event: responseEvent.viewDetail,
      token: token
    }

    const e2 = {
      event: responseEvent.viewList
    }

    AppController.response(e);
    AppController.response(e2);

    name.value = '';
    unit.value = '';
    description.value = '';

  }

  favoriteToken(tokenID:Number) {
    for(let i in tokenList) {
      if(tokenList[i].id === tokenID) {
        tokenList[i].favorite = !tokenList[i].favorite;

        this.viewTokenDetail(tokenList[i]);
      }
    }
  }
}

export default new TokenModel();
