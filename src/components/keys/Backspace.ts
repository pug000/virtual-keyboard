import Keys from './Keys';

export default class Backspace extends Keys {
  input = () => {
    let { position } = this.textarea;
    this.textarea.removeBeforeChar(position);
    position -= 1;
    this.textarea.node.setSelectionRange(position, position);
  };
}
