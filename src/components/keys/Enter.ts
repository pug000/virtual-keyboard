import Keys from './Keys';

export default class Enter extends Keys {
  input = () => {
    let { position } = this.textarea;
    this.textarea.addChar(position, '\n');
    position += 1;
    this.textarea.node.setSelectionRange(position, position);
  };
}
