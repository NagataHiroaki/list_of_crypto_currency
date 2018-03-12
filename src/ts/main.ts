import TokenListView from "./view/TokenListView";
import TokenDetailView from "./view/TokenDetailView";
import TokenRegistView from "./view/TokenRegistView";
import DialogView from "./view/DialogView";
import OverlayView from "./view/OverlayView";
import AppController, { responseEvent, requestEvent } from "./controller/AppController";


TokenListView;
TokenDetailView;
TokenRegistView;
DialogView;
OverlayView;

const listEvent = {
  event: responseEvent.viewList
}

const DetailEvent = {
  event: requestEvent.getTokenInfo,
  tokenID: 0

}

AppController.response(listEvent);
AppController.request(DetailEvent);
