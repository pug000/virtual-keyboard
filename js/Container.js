import Keyboard from './Keyboard.js';

export default class Container {
  constructor(keyButtons) {
    this.container = document.createElement('div');
    this.textarea = document.createElement('textarea');
    this.keyButtons = keyButtons;
  }

  init() {
    const keyboard = new Keyboard(this.keyButtons);
    this.container.classList.add('container');
    this.textarea.setAttribute('id', 'textarea');
    this.container.appendChild(this.textarea);
    this.container.appendChild(keyboard.initKeyboard());
    return this.container;
  }
}
