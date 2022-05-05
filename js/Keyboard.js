import Buttons from './Buttons.js';

export default class Keyboard {
  constructor(textarea, keyButtons) {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.className = 'body-keyboard';
    this.textarea = textarea;
    this.keyButtons = keyButtons;
    this.buttons = '';
    this.keys = [];
  }

  initKeyboard() {
    this.keyButtons.forEach((itemButtons) => {
      // const keysClass = items[0];
      // const keysEng = items[1].en;
      // const keysRus = items[1].ru;
      this.buttons = new Buttons(this.keyboardBody, itemButtons, this.textarea);
      this.keyboardBody.appendChild(this.buttons.initKeys());
    });
    return this.keyboardBody;
  }
}
