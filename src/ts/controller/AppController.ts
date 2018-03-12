import TokenModel from "../model/TokenModel";
import TokenDetailView from "../view/TokenDetailView";
import OverlayView from "../view/OverlayView";
import DialogView from "../view/DialogView";
import TokenListView from "../view/TokenListView";

export const requestEvent = {
  getTokenInfo: "getTokenInfo",
  registToken: "registToken",
  registTokenCancel: "registTokenCancel",
  registTokenAdd: "registTokenAdd",
  favoriteToken: "favoriteToken",
  dialogOpen: "dialogOpen",
  dialogClose: "dialogClose"
};

export const responseEvent = {
  viewList: "viewList",
  viewDetail: "viewDetail",
  registToken: "registToken"
};

class AppController {

  constructor() {

  }

  request(e) {

    console.log(e.event);

    switch (e.event) {
      case requestEvent.getTokenInfo:
        TokenModel.getTokenInfo(e.tokenID);
        break;
      case requestEvent.registToken:
        DialogView.open();
        OverlayView.open();
        break;
      case requestEvent.registTokenCancel:
        DialogView.close();
        OverlayView.close();
        break;
      case requestEvent.registTokenAdd:
        DialogView.close();
        OverlayView.close();
        TokenModel.registToken();
        break;
      // case requestEvent.dialogOpen:
      //   DialogView.open();
      //   OverlayView.open();
      //   break;
      // case requestEvent.dialogClose:
      //   DialogView.close();
      //   OverlayView.close();
      //   break;
      case requestEvent.favoriteToken:
        break;
      default:
        break;
    }
  }

  response(e) {

    switch (e.event) {
      case responseEvent.viewList:
        TokenListView.render();
        TokenListView.setItem();
        break;
      case responseEvent.viewDetail:
        TokenDetailView.render(e.token);
        break;
      case responseEvent.registToken:
        DialogView.close();
        OverlayView.close();
        break;
      case responseEvent.registToken:
        DialogView.close();
        OverlayView.close();
        break;
      default:
        break;
    }
  }
}

export default new AppController();
