import ToggleElmBaseView from "./ToggleElmBaseView";

class Overlay extends ToggleElmBaseView {
  elm:Element;
  ACTIVE_CLASS: string;

  constructor() {
    super();

    this.dialog = document.getElementById('js-overlay');
    this.ACTIVE_CLASS = "active";
  }
}

export default new Overlay();
