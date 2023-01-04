import Keys from './Keys';

export default class Tab extends Keys {
  input = () => {
    let { position } = this.textarea;
    this.textarea.addChar(position, '\t');
    position += 1;
    this.textarea.node.setSelectionRange(position, position);
  };
}
