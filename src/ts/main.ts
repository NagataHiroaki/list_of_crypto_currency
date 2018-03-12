import AppController, { responseEvent, requestEvent } from "./controller/AppController";
import TokenListView from "./view/TokenListView";
import TokenDetailView from "./view/TokenDetailView";
import TokenRegistView from "./view/TokenRegistView";
import DialogView from "./view/DialogView";
import OverlayView from "./view/OverlayView";


TokenListView;
TokenDetailView;
TokenRegistView;
DialogView;
OverlayView;

const listEvent = {
  event: responseEvent.viewList
}

const DetailEvent = {
  event: responseEvent.viewDetail,
  tokenID: 0
}

AppController.response(listEvent);
AppController.response(DetailEvent);
// AppController.request(DetailEvent);
