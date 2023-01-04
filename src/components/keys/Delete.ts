import Keys from './Keys';

export default class Delete extends Keys {
  input = () => {
    const { position } = this.textarea;
    this.textarea.removeAfterChar(position);
    this.textarea.node.setSelectionRange(position, position);
  };
}
