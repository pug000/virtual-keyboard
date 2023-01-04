import KeyboardState from '../common/KeyboardState';
import View from '../common/View';

import keys from '../utils/languages/keyCode';

import { FunctionalKeysState } from '../ts/interfaces';

import Keyboard from './Keyboard';
import Textarea from './Textarea';

export default class Container extends View {
  private state: KeyboardState;

  private keyboard: Keyboard;

  private textarea: Textarea;

  constructor(parent: HTMLElement, functionalKeysState: FunctionalKeysState) {
    super(parent, 'div', 'container');

    this.state = new KeyboardState(functionalKeysState);

    const update = (state: FunctionalKeysState) => {
      const currentLang = this.state.languages[state.langIndex];
      if (state.capsLock) {
        this.keyboard.switchLanguage(currentLang.capsLockState);
      } else if (state.shift) {
        this.keyboard.switchLanguage(currentLang.shiftState);
      } else {
        this.keyboard.switchLanguage(currentLang.defaultState);
      }
    };

    this.state.change.add(update);
    this.textarea = new Textarea(this.node);
    this.keyboard = new Keyboard(this.node, keys, this.textarea, this.state);

    document.addEventListener('keydown', (event: KeyboardEvent) => {
      event.preventDefault();
      this.keyboard.handleDown(event.code, event);
    });

    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.keyboard.handleUp(event.code);
    });

    update(this.state.data);
  }
}
