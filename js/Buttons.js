export default class Buttons {
  constructor() {
    this.lineBreak = ['Backspace', 'Delete', 'Enter', 'ShiftRight', 'ControlRight'];
    this.keyFunc = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'Switch-Lang', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
  }

  initKeys(item) {
    const fragment = document.createDocumentFragment();
    Object.entries(item).forEach((elem) => {
      const keysClass = elem[0];
      const keysEng = elem[1].en;
      const keysRus = elem[1].ru;
      const keyElement = document.createElement('div');
      const br = document.createElement('br');
      keyElement.classList.add('keyboard__key');
      keyElement.classList.add(`${keysClass}`);
      keyElement.textContent = keysEng;
      // keyElement.textContent = keysRus;
      fragment.appendChild(keyElement);
      if (this.keyFunc.indexOf(keysClass) !== -1) {
        keyElement.classList.add('functional');
      }
      if (this.lineBreak.indexOf(keysClass) !== -1) {
        fragment.appendChild(br);
      }
    });
    return fragment;
  }
}
