export default class Keyboard {
  constructor(textarea, keyButtons) {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.className = 'body-keyboard';
    this.textarea = textarea;
    this.keyButtons = keyButtons;
    this.capsLock = false;
    this.shift = false;
    this.keys = [];
    this.lang = false;
  }

  initKeyboard() {
    this.keyboardBody.appendChild(this.createKeys());
    this.keys = this.keyboardBody.children;
    this.addFunctionalKey();
    return this.keyboardBody;
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    this.keyButtons.forEach((elem) => {
      this.keyElement = document.createElement('div');
      this.keyElement.className = 'keyboard__key';
      this.keyElement.classList.add(`${elem.code}`);
      this.keyElement.textContent = elem.key.en;
      fragment.appendChild(this.keyElement);
    });

    return fragment;
  }

  addFunctionalKey() {
    Array.from(this.keys).forEach((item) => {
      if (item.classList.contains('Backspace')) {
        this.addBackspace(item);
      } else if (item.classList.contains('Tab')) {
        this.addTab(item);
      } else if (item.classList.contains('Delete')) {
        this.addDelete(item);
      } else if (item.classList.contains('Enter')) {
        this.addEnter(item);
      } else if (item.classList.contains('CapsLock')) {
        this.addCapsLock(item);
      } else if (item.classList.contains('Space')) {
        this.addSpace(item);
      } else if (item.classList.contains('ControlLeft')
        || item.classList.contains('ControlRight')) {
        this.addControl(item);
      } else if (item.classList.contains('AltLeft')
        || item.classList.contains('AltRight')) {
        this.addAlt(item);
      } else if (item.classList.contains('ShiftLeft')
        || item.classList.contains('ShiftRight')) {
        this.addShift(item);
      } else if (item.classList.contains('Switch-Lang')) {
        this.addSwitchLang(item);
      } else {
        this.defaultKeys(item);
      }
    });
  }

  doNothingWrite() {
    this.textarea.value += '';
  }

  addBackspace(backspace) {
    document.addEventListener('keydown', (e) => {
      if (backspace.classList.contains(`${e.code}`)) {
        backspace.classList.add('active');
        e.preventDefault();
        this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
        this.textarea.textContent = this.textarea.value;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (backspace.classList.contains(`${e.code}`)) {
        backspace.classList.remove('active');
      }
    });

    backspace.addEventListener('mousedown', () => {
      backspace.classList.add('active');
    });
    backspace.addEventListener('mouseup', () => {
      backspace.classList.remove('active');
      this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
      this.textarea.textContent = this.textarea.value;
    });
  }

  addTab(tab) {
    document.addEventListener('keydown', (e) => {
      if (tab.classList.contains(`${e.code}`)) {
        tab.classList.add('active');
        e.preventDefault();
        this.textarea.value += '  ';
        this.textarea.textContent = this.textarea.value;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (tab.classList.contains(`${e.code}`)) {
        tab.classList.remove('active');
      }
    });

    tab.addEventListener('mousedown', () => {
      tab.classList.add('active');
    });

    tab.addEventListener('mouseup', () => {
      tab.classList.remove('active');
      this.textarea.value += '  ';
      this.textarea.textContent = this.textarea.value;
    });
  }

  addDelete(del) {
    document.addEventListener('keydown', (e) => {
      if (del.classList.contains(`${e.code}`)) {
        del.classList.add('active');
        e.preventDefault();
        this.textarea.value = this.textarea.value.substring(1);
        this.textarea.textContent = this.textarea.value;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (del.classList.contains(`${e.code}`)) {
        del.classList.remove('active');
      }
    });

    del.addEventListener('mousedown', () => {
      del.classList.add('active');
    });
    del.addEventListener('mouseup', () => {
      del.classList.remove('active');
      this.textarea.value = this.textarea.value.substring(1);
      this.textarea.textContent = this.textarea.value;
    });
  }

  addEnter(enter) {
    document.addEventListener('keydown', (e) => {
      if (enter.classList.contains(`${e.code}`)) {
        enter.classList.add('active');
        e.preventDefault();
        this.textarea.value += '\n';
        this.textarea.textContent = this.textarea.value;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (enter.classList.contains(`${e.code}`)) {
        enter.classList.remove('active');
      }
    });

    enter.addEventListener('mousedown', () => {
      enter.classList.add('active');
    });
    enter.addEventListener('mouseup', () => {
      enter.classList.remove('active');
      this.textarea.value += '\n';
      this.textarea.textContent = this.textarea.value;
    });
  }

  addSpace(space) {
    document.addEventListener('keydown', (e) => {
      if (space.classList.contains(`${e.code}`)) {
        space.classList.add('active');
        e.preventDefault();
        this.textarea.value += ' ';
      }
    });

    document.addEventListener('keyup', (e) => {
      if (space.classList.contains(`${e.code}`)) {
        space.classList.remove('active');
      }
    });

    space.addEventListener('mousedown', () => {
      space.classList.add('active');
    });
    space.addEventListener('mouseup', () => {
      space.classList.remove('active');
      this.textarea.value += ' ';
    });
  }

  addCapsLock(capslock) {
    document.addEventListener('keydown', (e) => {
      if (capslock.classList.contains(`${e.code}`)) {
        capslock.classList.toggle('active');
        e.preventDefault();
        this.doNothingWrite();
        this.toggleCapsLock();
      }
    });

    capslock.addEventListener('click', () => {
      capslock.classList.toggle('active');
      this.doNothingWrite();
      this.toggleCapsLock();
    });
  }

  addControl(ctrl) {
    document.addEventListener('keydown', (e) => {
      if (ctrl.classList.contains(`${e.code}`)) {
        ctrl.classList.add('active');
        e.preventDefault();
        this.doNothingWrite();
      }
    });

    document.addEventListener('keyup', (e) => {
      if (ctrl.classList.contains(`${e.code}`)) {
        ctrl.classList.remove('active');
      }
    });

    ctrl.addEventListener('mousedown', () => {
      ctrl.classList.add('active');
    });
    ctrl.addEventListener('mouseup', () => {
      ctrl.classList.remove('active');
      this.doNothingWrite();
    });
  }

  addAlt(alt) {
    document.addEventListener('keydown', (e) => {
      if (alt.classList.contains(`${e.code}`)) {
        alt.classList.add('active');
        e.preventDefault();
        this.doNothingWrite();
      }
    });

    document.addEventListener('keyup', (e) => {
      if (alt.classList.contains(`${e.code}`)) {
        alt.classList.remove('active');
      }
    });

    alt.addEventListener('mousedown', () => {
      alt.classList.add('active');
    });
    alt.addEventListener('mouseup', () => {
      alt.classList.remove('active');
      this.doNothingWrite();
    });
  }

  addSwitchLang(lang) {
    lang.addEventListener('mousedown', () => {
      lang.classList.add('active');
    });
    lang.addEventListener('mouseup', () => {
      lang.classList.remove('active');
      this.switchLang();
      this.doNothingWrite();
    });
  }

  addShift(shift) {
    document.addEventListener('keydown', (e) => {
      if (shift.classList.contains(`${e.code}`)) {
        shift.classList.add('active');
        e.preventDefault();
        this.doNothingWrite();
        this.toggleShift();
      }
    });

    document.addEventListener('keyup', (e) => {
      if (shift.classList.contains(`${e.code}`)) {
        shift.classList.remove('active');
        this.toggleShift();
      }
    });

    shift.addEventListener('mousedown', () => {
      shift.classList.add('active');
      this.toggleShift();
      this.doNothingWrite();
    });
    shift.addEventListener('mouseup', () => {
      shift.classList.remove('active');
      this.toggleShift();
    });
  }

  defaultKeys(keys) {
    document.addEventListener('keydown', (e) => {
      if (keys.classList.contains(`${e.code}`)) {
        keys.classList.add('active');
        this.textarea.value += keys.textContent;
      }
    });

    document.addEventListener('keyup', () => {
      keys.classList.remove('active');
    });

    keys.addEventListener('mousedown', () => {
      keys.classList.add('active');
    });
    keys.addEventListener('mouseup', () => {
      keys.classList.remove('active');
      this.textarea.value += keys.textContent;
    });
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;

    for (let i = 0; i < this.keys.length; i += 1) {
      const { ru } = this.keyButtons[i].key;
      const { en } = this.keyButtons[i].key;
      if (this.keys[i].childElementCount === 0) {
        if (this.lang) {
          this.keys[i].textContent = this.capsLock ? ru.toUpperCase() : ru.toLowerCase();
        } else {
          this.keys[i].textContent = this.capsLock ? en.toUpperCase() : en.toLowerCase();
        }
      }
    }
  }

  toggleShift() {
    this.shift = !this.shift;

    for (let i = 0; i < this.keys.length; i += 1) {
      const { ru } = this.keyButtons[i].key;
      const { en } = this.keyButtons[i].key;
      const shiftRu = this.keyButtons[i].shift.ru;
      const shiftEn = this.keyButtons[i].shift.en;
      if (this.keys[i].childElementCount === 0) {
        if (this.lang) {
          this.keys[i].textContent = this.shift ? shiftRu : ru;
        } else {
          this.keys[i].textContent = this.shift ? shiftEn : en;
        }
      }
    }
  }

  switchLang() {
    this.lang = !this.lang;

    for (let i = 0; i < this.keys.length; i += 1) {
      const { ru } = this.keyButtons[i].key;
      const { en } = this.keyButtons[i].key;
      if (this.keys[i].childElementCount === 0) {
        if (this.lang) {
          this.keys[i].textContent = this.capsLock ? ru.toUpperCase() : ru.toLowerCase();
        } else {
          this.keys[i].textContent = this.capsLock ? en.toUpperCase() : en.toLowerCase();
        }
      }
    }
  }
}
