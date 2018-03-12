export default class ToggleElmBaseView {
  dialog:Element;
  ACTIVE_CLASS: string;

  constructor() {
    this.dialog;
    this.ACTIVE_CLASS;
  }

  open() {
    this.dialog.classList.add(this.ACTIVE_CLASS);
  }

  close() {
    this.dialog.classList.remove(this.ACTIVE_CLASS);
  }
}
