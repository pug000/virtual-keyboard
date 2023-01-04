import KeyboardState from '../../common/KeyboardState';
import View from '../../common/View';

import Textarea from '../Textarea';

export default class Keys extends View {
  protected textarea: Textarea;

  protected state: KeyboardState;

  protected value: string;

  constructor(parent: HTMLElement, value: string, textarea: Textarea, state: KeyboardState) {
    super(parent, 'div', `keyboard__key ${value}`);
    this.textarea = textarea;
    this.state = state;
    this.value = value;

    this.node.onmousedown = () => {
      this.addActive();
    };

    this.node.onmouseup = () => {
      this.removeActive();
      this.input();
    };

    this.node.onmouseleave = () => {
      this.removeActive();
    };
  }

  eventDown = (_event: KeyboardEvent) => {
    this.addActive();
    this.input();
  };

  eventUp = () => {
    this.removeActive();
  };

  addActive() {
    this.node.classList.add('active');
  }

  removeActive() {
    this.node.classList.remove('active');
  }

  input = () => {
    let { position } = this.textarea;
    this.textarea.addChar(position, this.value);
    position += 1;
    this.textarea.node.setSelectionRange(position, position);
  };

  setKey = (value: string) => {
    this.value = value;
    this.node.textContent = value;
  };
}
