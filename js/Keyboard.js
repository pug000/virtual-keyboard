import Buttons from './Buttons.js';

export default class Keyboard {
  constructor(textarea, keyButtons) {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.className = 'body-keyboard';
    this.textarea = textarea;
    this.keyButtons = keyButtons;
    this.buttons = '';
  }

  initKeyboard() {
    this.keyButtons.forEach((elem) => {
      Object.entries(elem).forEach((items) => {
        const keysClass = items[0];
        const keysEng = items[1].en;
        const keysRus = items[1].ru;
        this.buttons = new Buttons(keysClass, keysEng, keysRus, this.textarea);
        this.keyboardBody.appendChild(this.buttons.initKeys());
      });
    });
    return this.keyboardBody;
  }
}
