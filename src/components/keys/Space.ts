import Keys from './Keys';

export default class Space extends Keys {
  input = () => {
    let { position } = this.textarea;
    this.textarea.addChar(position, ' ');
    position += 1;
    this.textarea.node.setSelectionRange(position, position);
  };
}
