import ToggleElmBaseView from "./ToggleElmBaseView";

class DialogView extends ToggleElmBaseView {
  dialog:Element;
  ACTIVE_CLASS: string;

  constructor() {
    super();

    this.dialog = document.getElementById('js-dialog');
    this.ACTIVE_CLASS = "active";
  }
}

export default new DialogView();
