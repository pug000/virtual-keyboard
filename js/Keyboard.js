import Buttons from './Buttons.js';

export default class Keyboard {
  constructor(keyButtons) {
    this.keyboardBody = document.createElement('div');
    this.key = [];
    this.value = '';
    this.keyButtons = keyButtons;
  }

  initKeyboard() {
    const buttons = new Buttons();
    this.keyboardBody.classList.add('body-keyboard');
    this.keyButtons.forEach((elem) => {
      this.keyboardBody.appendChild(buttons.initKeys(elem));
    });
    return this.keyboardBody;
  }
}
