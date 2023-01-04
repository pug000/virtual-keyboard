import Keys from './Keys';

export default class Control extends Keys {
  input = () => {
    const { position } = this.textarea;
    this.textarea.addChar(position, '');
  };
}
