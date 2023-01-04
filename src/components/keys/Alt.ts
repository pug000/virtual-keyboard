import KeyboardState from '../../common/KeyboardState';
import Textarea from '../Textarea';

import Keys from './Keys';

export default class Alt extends Keys {
  constructor(parent: HTMLElement, value: string, textarea: Textarea, state: KeyboardState) {
    super(parent, value, textarea, state);

    this.node.onmousedown = () => {
      super.addActive();
      this.holdDown();
    };

    this.node.onmouseup = () => {
      super.removeActive();
      this.holdUp();
    };

    this.node.onmouseleave = () => {
      super.removeActive();
      this.holdUp();
    };
  }

  eventDown = (event: KeyboardEvent) => {
    if (event.repeat) {
      return;
    }

    super.addActive();
    this.holdDown();
  };

  eventUp = () => {
    super.removeActive();
    this.holdUp();
  };

  holdDown = () => {
    const { state } = this;
    state.data = {
      ...state.data,
      alt: true,
    };

    if (state.data.shift) {
      state.data = {
        ...state.data,
        langIndex: (state.data.langIndex + 1) % state.languages.length,
      };
    }
  };

  holdUp = () => {
    const { state } = this;
    state.data = {
      ...state.data,
      alt: false,
    };
  };
}
