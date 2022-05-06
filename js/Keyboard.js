export default class Keyboard {
  constructor(textarea, keyButtons) {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.className = 'body-keyboard';
    this.textarea = textarea;
    this.keyButtons = keyButtons;
    this.capsLock = false;
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
      } else if (item.classList.contains('ControlLeft')
        || item.classList.contains('ControlRight')) {
        this.addControl(item);
      } else if (item.classList.contains('AltLeft')
        || item.classList.contains('AltRight')) {
        this.addAlt(item);
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
    space.addEventListener('mousedown', () => {
      space.classList.add('active');
    });
    space.addEventListener('mouseup', () => {
      space.classList.remove('active');
      this.textarea.value += ' ';
    });
  }

  addCapsLock(capslock) {
    capslock.addEventListener('click', () => {
      capslock.classList.toggle('active');
      this.doNothingWrite();
      this.toggleCapsLock();
    });
  }

  addControl(ctrl) {
    ctrl.addEventListener('mousedown', () => {
      ctrl.classList.add('active');
    });
    ctrl.addEventListener('mouseup', () => {
      ctrl.classList.remove('active');
      this.doNothingWrite();
    });
  }

  addAlt(alt) {
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

  defaultKeys(keys) {
    keys.addEventListener('mousedown', (e) => {
      e.target.classList.add('active');
    });
    keys.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
      this.textarea.value += keys.textContent;
    });
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;

    for (let i = 0; i < this.keys.length; i += 1) {
      if (this.keys[i].childElementCount === 0) {
        if (this.capsLock) {
          this.keys[i].textContent = this.keys[i].textContent.toUpperCase();
        } else {
          this.keys[i].textContent = this.keys[i].textContent.toLowerCase();
        }
      }
    }
  }

  switchLang() {
    this.lang = !this.lang;

    for (let i = 0; i < this.keys.length; i += 1) {
      const rus = this.keyButtons[i].key.ru;
      const eng = this.keyButtons[i].key.en;
      if (this.keys[i].childElementCount === 0) {
        if (this.lang) {
          this.keys[i].textContent = rus;
        } else {
          this.keys[i].textContent = eng;
        }
      }
    }
  }
}
