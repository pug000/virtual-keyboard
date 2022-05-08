import * as localStorage from './localStorage.js';

export default class Keyboard {
  constructor(textarea, keyButtons, lang) {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.className = 'body-keyboard';
    this.textarea = textarea;
    this.keyButtons = keyButtons;
    this.capsLock = false;
    this.shift = false;
    this.keys = [];
    this.lang = lang;
    this.pressed = {};
    this.currentPos = '';
  }

  initKeyboard() {
    this.keyboardBody.appendChild(this.createKeys());
    this.keys = this.keyboardBody.children;
    this.handleClicks();
    this.handleKey();
    return this.keyboardBody;
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    this.keyButtons.forEach((elem) => {
      const { ru } = elem.key;
      const { en } = elem.key;
      this.keyElement = document.createElement('div');
      this.keyElement.className = 'keyboard__key';
      this.keyElement.classList.add(`${elem.class}`);
      this.keyElement.setAttribute('data-key', `${elem.code}`);

      if (this.lang === 'en') {
        this.keyElement.textContent = en;
      } else {
        this.keyElement.textContent = ru;
      }

      fragment.appendChild(this.keyElement);
    });

    return fragment;
  }

  handleClicks() {
    Array.from(this.keys).forEach((item) => {
      item.addEventListener('mousedown', (e) => {
        e.target.classList.add('active');
        this.textarea.focus();
        if (item.classList.contains('Shift')) {
          this.addShift(e);
          this.pressed[e.key] = true;
        } else if (item.classList.contains('Alt')) {
          this.addAlt(e);
          this.pressed[e.key] = true;
        }
      });

      item.addEventListener('mouseup', (e) => {
        this.currentPos = this.textarea.selectionStart;
        const beforePos = this.textarea.value.slice(0, this.currentPos);
        const afterPos = this.textarea.value.slice(this.currentPos);
        e.target.classList.remove('active');
        this.animation(item);
        this.mouseEvents(e, item, beforePos, afterPos);
      });
    });
  }

  mouseEvents(e, item, beforePos, afterPos) {
    if (item.classList.contains('Backspace')) {
      this.addBackspace(beforePos, afterPos);
    } else if (item.classList.contains('Delete')) {
      this.addDelete(beforePos, afterPos);
    } else if (item.classList.contains('Tab')) {
      this.addTab(beforePos, afterPos);
    } else if (item.classList.contains('Enter')) {
      this.addEnter(beforePos, afterPos);
    } else if (item.classList.contains('CapsLock')) {
      this.addCapsLock(e);
    } else if (item.classList.contains('Control')) {
      this.addControl();
    } else if (item.classList.contains('Space')) {
      this.addSpace(beforePos, afterPos);
    } else if (item.classList.contains('Switch-Lang')) {
      this.addSwitchLang();
    } else if (item.classList.contains('Shift')) {
      delete this.pressed[e.key];
      this.addShift(e);
    } else if (item.classList.contains('Alt')) {
      delete this.pressed[e.key];
      this.addAlt(e);
    } else {
      this.addDefaultKeys(item, beforePos, afterPos);
    }
    this.textarea.focus();
    this.textarea.setSelectionRange(this.currentPos, this.currentPos);
  }

  handleKey() {
    Array.from(this.keys).forEach((item) => {
      document.addEventListener('keydown', (e) => {
        this.currentPos = this.textarea.selectionStart;
        const beforePos = this.textarea.value.slice(0, this.currentPos);
        const afterPos = this.textarea.value.slice(this.currentPos);
        if (e.code === item.dataset.key) {
          e.preventDefault();
          item.classList.add('active');
          this.keyEvents(e, item, beforePos, afterPos);
          this.animation(item);
        }
      });

      document.addEventListener('keyup', (e) => {
        if (e.code === item.dataset.key) {
          item.classList.remove('active');
          if (e.code === 'ShiftLeft'
            || e.code === 'ShiftRight') {
            delete this.pressed[e.key];
            this.addShift(e);
          } else if (e.code === 'AltLeft'
            || e.code === 'AltRight') {
            delete this.pressed[e.key];
          }
        }
      });
    });
  }

  keyEvents(e, item, beforePos, afterPos) {
    if (e.code === 'Backspace') {
      this.addBackspace(beforePos, afterPos);
    } else if (e.code === 'Delete') {
      this.addDelete(beforePos, afterPos);
    } else if (e.code === 'Tab') {
      this.addTab(beforePos, afterPos);
    } else if (e.code === 'Enter') {
      this.addEnter(beforePos, afterPos);
    } else if (e.code === 'CapsLock') {
      this.addCapsLock(e);
    } else if (e.code === 'ShiftLeft'
      || e.code === 'ShiftRight') {
      this.pressed[e.key] = true;
      this.addShift(e);
    } else if (e.code === 'ControlLeft'
      || e.code === 'ControlRight') {
      this.addControl();
    } else if (e.code === 'AltLeft'
      || e.code === 'AltRight') {
      this.pressed[e.key] = true;
      this.addAlt(e);
    } else if (e.code === 'Space') {
      this.addSpace(beforePos, afterPos);
    } else {
      this.addDefaultKeys(item, beforePos, afterPos);
    }
    this.textarea.focus();
    this.textarea.setSelectionRange(this.currentPos, this.currentPos);
  }

  addBackspace(beforePos, afterPos) {
    if (this.currentPos === 0) {
      return;
    }
    this.doNothingWrite();
    this.textarea.value = beforePos.slice(0, -1) + afterPos;
    this.currentPos -= 1;
  }

  addDelete(beforePos, afterPos) {
    this.doNothingWrite();
    this.textarea.value = beforePos + afterPos.substring(1);
  }

  addTab(beforePos, afterPos) {
    const tabText = '\t';
    this.textarea.value = beforePos + tabText + afterPos;
    this.currentPos += 1;
  }

  addCapsLock(e) {
    if (e.repeat) {
      return;
    }
    this.doNothingWrite();
    this.toggleCapsLock();
  }

  addEnter(beforePos, afterPos) {
    const enterText = '\n';
    this.textarea.value = beforePos + enterText + afterPos;
    this.currentPos += 1;
  }

  addShift(e) {
    if (e.repeat) {
      return;
    }
    this.doNothingWrite();
    this.toggleShift();
    this.addShortCut();
  }

  addAlt(e) {
    if (e.repeat) {
      return;
    }
    this.doNothingWrite();
    this.addShortCut();
  }

  addSwitchLang() {
    this.doNothingWrite();
    this.toggleLang();
  }

  addSpace(beforePos, afterPos) {
    const spaceText = ' ';
    this.textarea.value = beforePos + spaceText + afterPos;
    this.currentPos += 1;
  }

  addControl() {
    this.doNothingWrite();
  }

  addDefaultKeys(key, beforePos, afterPos) {
    this.textarea.value = beforePos + key.textContent + afterPos;
    this.currentPos += 1;
  }

  doNothingWrite() {
    this.textarea.value += '';
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;
    this.changeRegister();
  }

  toggleShift() {
    this.shift = !this.shift;
    this.changeRegister();
  }

  addShortCut() {
    if (this.pressed.Shift && this.pressed.Alt) {
      this.toggleLang();
    }
  }

  toggleLang() {
    this.lang = this.lang === 'en' ? 'ru' : 'en';
    this.changeRegister();
  }

  changeRegister() {
    for (let i = 0; i < this.keys.length; i += 1) {
      const { ru } = this.keyButtons[i].key;
      const { en } = this.keyButtons[i].key;
      const { shift } = this.keyButtons[i];

      if (this.lang === 'ru') {
        localStorage.setLocalStorage(this.lang);
        if (this.capsLock) {
          this.keys[i].textContent = ru.toUpperCase();
        } else if (!this.capsLock) {
          this.keys[i].textContent = ru.toLowerCase();
        }
        if (this.shift) {
          this.keys[i].textContent = shift.ru;
        } else if (!this.shift) {
          this.keys[i].textContent = ru;
        }
        if (this.capsLock && !this.shift) {
          this.keys[i].textContent = ru.toUpperCase();
        } else if (this.capsLock && this.shift) {
          this.keys[i].textContent = shift.ru.toLowerCase();
        }
      } else if (this.lang === 'en') {
        localStorage.setLocalStorage(this.lang);
        if (this.capsLock) {
          this.keys[i].textContent = en.toUpperCase();
        } else if (!this.capsLock) {
          this.keys[i].textContent = en.toLowerCase();
        }
        if (this.shift) {
          this.keys[i].textContent = shift.en;
        } else if (!this.shift) {
          this.keys[i].textContent = en;
        }
        if (this.capsLock && !this.shift) {
          this.keys[i].textContent = en.toUpperCase();
        } else if (this.capsLock && this.shift) {
          this.keys[i].textContent = shift.en.toLowerCase();
        }
      }
    }
  }

  animation(element) {
    const hueColor = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
    const color = `hsla(${hueColor}, 100%, 50%, 50%)`;
    const textColor = `hsl(${hueColor}, 100%, 50%)`;
    const textShadow = `0 0 0.80em ${color}, 0 0 1.60em ${color}, 0 0 4em ${color}`;
    const boxShadow = `-3px 3px 4px ${color}, 3px -3px 4px ${color}, 3px 3px 4px ${color}, 
    -3px -3px 4px ${color}, 0 0 10px ${color}`;

    const keyIndex = Array.from(this.keys).indexOf(element);
    const animatedKeysRight = Array.from(this.keys).slice(keyIndex);
    const animatedKeysLeft = Array.from(this.keys).slice(0, keyIndex);

    const transitionHandler = (e) => {
      e.target.style.boxShadow = 'none';
      e.target.style.color = null;
      e.target.style.textShadow = 'none';
      e.target.removeEventListener('transitionend', transitionHandler);
    };

    animatedKeysRight.forEach((elem, i) => {
      setTimeout(() => {
        elem.addEventListener('transitionend', transitionHandler);
        animatedKeysRight[i].style.boxShadow = boxShadow;
        animatedKeysRight[i].style.color = textColor;
        animatedKeysRight[i].style.textShadow = textShadow;
      }, i * 35);
    });

    animatedKeysLeft.forEach((elem, j) => {
      const i = animatedKeysLeft.length - j;
      setTimeout(() => {
        elem.addEventListener('transitionend', transitionHandler);
        animatedKeysLeft[j].style.boxShadow = boxShadow;
        animatedKeysLeft[j].style.color = textColor;
        animatedKeysLeft[j].style.textShadow = textShadow;
      }, i * 35);
    });
  }
}
