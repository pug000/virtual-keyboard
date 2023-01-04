import Keys from './Keys';

export default class Capslock extends Keys {
  eventDown = (event: KeyboardEvent) => {
    if (event.repeat) {
      return;
    }

    super.addActive();
    this.input();
  };

  input = () => {
    const { position } = this.textarea;
    this.textarea.addChar(position, '');

    const { state } = this;
    state.data = {
      ...state.data,
      capsLock: !state.data.capsLock,
    };

    if (state.data.shift) {
      state.data = {
        ...state.data,
        shift: !state.data.shift,
      };
    }
  };
}
