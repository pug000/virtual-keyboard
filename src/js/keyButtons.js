const keyButtons = [
  {
    class: 'Backquote', code: 'Backquote', key: { en: '`', ru: 'ё' }, shift: { en: '~', ru: 'Ё' },
  },
  {
    class: 'Digit1', code: 'Digit1', key: { en: '1', ru: '1' }, shift: { en: '!', ru: '!' },
  },
  {
    class: 'Digit2', code: 'Digit2', key: { en: '2', ru: '2' }, shift: { en: '@', ru: '"' },
  },
  {
    class: 'Digit3', code: 'Digit3', key: { en: '3', ru: '3' }, shift: { en: '#', ru: '№' },
  },
  {
    class: 'Digit4', code: 'Digit4', key: { en: '4', ru: '4' }, shift: { en: '$', ru: ';' },
  },
  {
    class: 'Digit5', code: 'Digit5', key: { en: '5', ru: '5' }, shift: { en: '%', ru: '%' },
  },
  {
    class: 'Digit6', code: 'Digit6', key: { en: '6', ru: '6' }, shift: { en: '^', ru: ':' },
  },
  {
    class: 'Digit7', code: 'Digit7', key: { en: '7', ru: '7' }, shift: { en: '&', ru: '?' },
  },
  {
    class: 'Digit8', code: 'Digit8', key: { en: '8', ru: '8' }, shift: { en: '*', ru: '*' },
  },
  {
    class: 'Digit9', code: 'Digit9', key: { en: '9', ru: '9' }, shift: { en: '(', ru: '(' },
  },
  {
    class: 'Digit0', code: 'Digit0', key: { en: '0', ru: '0' }, shift: { en: ')', ru: ')' },
  },
  {
    class: 'Minus', code: 'Minus', key: { en: '-', ru: '-' }, shift: { en: '_', ru: '_' },
  },
  {
    class: 'Equal', code: 'Equal', key: { en: '=', ru: '=' }, shift: { en: '+', ru: '+' },
  },
  {
    class: 'Backspace', code: 'Backspace', key: { en: 'Backspace', ru: 'Backspace' }, shift: { en: 'Backspace', ru: 'Backspace' },
  },
  {
    class: 'Tab', code: 'Tab', key: { en: 'Tab', ru: 'Tab' }, shift: { en: 'Tab', ru: 'Tab' },
  },
  {
    class: 'KeyQ', code: 'KeyQ', key: { en: 'q', ru: 'й' }, shift: { en: 'Q', ru: 'Й' },
  },
  {
    class: 'KeyW', code: 'KeyW', key: { en: 'w', ru: 'ц' }, shift: { en: 'W', ru: 'Ц' },
  },
  {
    class: 'KeyE', code: 'KeyE', key: { en: 'e', ru: 'у' }, shift: { en: 'E', ru: 'У' },
  },
  {
    class: 'KeyR', code: 'KeyR', key: { en: 'r', ru: 'к' }, shift: { en: 'R', ru: 'К' },
  },
  {
    class: 'KeyT', code: 'KeyT', key: { en: 't', ru: 'е' }, shift: { en: 'T', ru: 'Е' },
  },
  {
    class: 'KeyY', code: 'KeyY', key: { en: 'y', ru: 'н' }, shift: { en: 'Y', ru: 'Н' },
  },
  {
    class: 'KeyU', code: 'KeyU', key: { en: 'u', ru: 'г' }, shift: { en: 'U', ru: 'Г' },
  },
  {
    class: 'KeyI', code: 'KeyI', key: { en: 'i', ru: 'ш' }, shift: { en: 'I', ru: 'Ш' },
  },
  {
    class: 'KeyO', code: 'KeyO', key: { en: 'o', ru: 'щ' }, shift: { en: 'O', ru: 'Щ' },
  },
  {
    class: 'KeyP', code: 'KeyP', key: { en: 'p', ru: 'з' }, shift: { en: 'P', ru: 'З' },
  },
  {
    class: 'BracketLeft', code: 'BracketLeft', key: { en: '[', ru: 'x' }, shift: { en: '{', ru: 'Х' },
  },
  {
    class: 'BracketRight', code: 'BracketRight', key: { en: ']', ru: 'ъ' }, shift: { en: '}', ru: 'Ъ' },
  },
  {
    class: 'Backslash', code: 'Backslash', key: { en: '|', ru: '"' }, shift: { en: '|', ru: '/' },
  },
  {
    class: 'Delete', code: 'Delete', key: { en: 'Del', ru: 'Del' }, shift: { en: 'Del', ru: 'Del' },
  },
  {
    class: 'CapsLock', code: 'CapsLock', key: { en: 'CapsLock', ru: 'CapsLock' }, shift: { en: 'CapsLock', ru: 'CapsLock' },
  },
  {
    class: 'KeyA', code: 'KeyA', key: { en: 'a', ru: 'ф' }, shift: { en: 'A', ru: 'Ф' },
  },
  {
    class: 'KeyS', code: 'KeyS', key: { en: 's', ru: 'ы' }, shift: { en: 'S', ru: 'Ы' },
  },
  {
    class: 'KeyD', code: 'KeyD', key: { en: 'd', ru: 'в' }, shift: { en: 'D', ru: 'В' },
  },
  {
    class: 'KeyF', code: 'KeyF', key: { en: 'f', ru: 'а' }, shift: { en: 'F', ru: 'А' },
  },
  {
    class: 'KeyG', code: 'KeyG', key: { en: 'g', ru: 'п' }, shift: { en: 'G', ru: 'П' },
  },
  {
    class: 'KeyH', code: 'KeyH', key: { en: 'h', ru: 'р' }, shift: { en: 'H', ru: 'Р' },
  },
  {
    class: 'KeyJ', code: 'KeyJ', key: { en: 'j', ru: 'о' }, shift: { en: 'J', ru: 'О' },
  },
  {
    class: 'KeyK', code: 'KeyK', key: { en: 'k', ru: 'л' }, shift: { en: 'K', ru: 'Л' },
  },
  {
    class: 'KeyL', code: 'KeyL', key: { en: 'l', ru: 'д' }, shift: { en: 'L', ru: 'Д' },
  },
  {
    class: 'Semicolon', code: 'Semicolon', key: { en: ';', ru: 'ж' }, shift: { en: ':', ru: 'Ж' },
  },
  {
    class: 'Quote', code: 'Quote', key: { en: "'", ru: 'э' }, shift: { en: '"', ru: 'Э' },
  },
  {
    class: 'Enter', code: 'Enter', key: { en: 'Enter', ru: 'Enter' }, shift: { en: 'Enter', ru: 'Enter' },
  },
  {
    class: 'Shift', code: 'ShiftLeft', key: { en: 'Shift', ru: 'Shift' }, shift: { en: 'Shift', ru: 'Shift' },
  },
  {
    class: 'KeyZ', code: 'KeyZ', key: { en: 'z', ru: 'я' }, shift: { en: 'Z', ru: 'Я' },
  },
  {
    class: 'KeyX', code: 'KeyX', key: { en: 'x', ru: 'ч' }, shift: { en: 'X', ru: 'Ч' },
  },
  {
    class: 'KeyC', code: 'KeyC', key: { en: 'c', ru: 'с' }, shift: { en: 'C', ru: 'С' },
  },
  {
    class: 'KeyV', code: 'KeyV', key: { en: 'v', ru: 'м' }, shift: { en: 'V', ru: 'М' },
  },
  {
    class: 'KeyB', code: 'KeyB', key: { en: 'b', ru: 'и' }, shift: { en: 'B', ru: 'И' },
  },
  {
    class: 'KeyN', code: 'KeyN', key: { en: 'n', ru: 'т' }, shift: { en: 'N', ru: 'Т' },
  },
  {
    class: 'KeyM', code: 'KeyM', key: { en: 'm', ru: 'ь' }, shift: { en: 'M', ru: 'Ь' },
  },
  {
    class: 'Comma', code: 'Comma', key: { en: ',', ru: 'б' }, shift: { en: '<', ru: 'Б' },
  },
  {
    class: 'Period', code: 'Period', key: { en: '.', ru: 'ю' }, shift: { en: '>', ru: 'Ю' },
  },
  {
    class: 'Slash', code: 'Slash', key: { en: '/', ru: '.' }, shift: { en: '?', ru: ',' },
  },
  {
    class: 'ArrowUp', code: 'ArrowUp', key: { en: '\u2191', ru: '\u2191' }, shift: { en: '\u2191', ru: '\u2191' },
  },
  {
    class: 'Shift', code: 'ShiftRight', key: { en: 'Shift', ru: 'Shift' }, shift: { en: 'Shift', ru: 'Shift' },
  },
  {
    class: 'Control', code: 'ControlLeft', key: { en: 'Ctrl', ru: 'Ctrl' }, shift: { en: 'Ctrl', ru: 'Ctrl' },
  },
  {
    class: 'Switch-Lang', code: 'Switch-Lang', key: { en: 'Rus', ru: 'Eng' }, shift: { en: 'Rus', ru: 'Eng' },
  },
  {
    class: 'Alt', code: 'AltLeft', key: { en: 'Alt', ru: 'Alt' }, shift: { en: 'Alt', ru: 'Alt' },
  },
  {
    class: 'Space', code: 'Space', key: { en: 'Space', ru: 'Space' }, shift: { en: 'Space', ru: 'Space' },
  },
  {
    class: 'Alt', code: 'AltRight', key: { en: 'Alt', ru: 'Alt' }, shift: { en: 'Alt', ru: 'Alt' },
  },
  {
    class: 'ArrowLeft', code: 'ArrowLeft', key: { en: '\u2190', ru: '\u2190' }, shift: { en: '\u2190', ru: '\u2190' },
  },
  {
    class: 'ArrowDown', code: 'ArrowDown', key: { en: '\u2193', ru: '\u2193' }, shift: { en: '\u2193', ru: '\u2193' },
  },
  {
    class: 'ArrowRight', code: 'ArrowRight', key: { en: '\u2192', ru: '\u2192' }, shift: { en: '\u2192', ru: '\u2192' },
  },
  {
    class: 'Control', code: 'ControlRight', key: { en: 'Ctrl', ru: 'Ctrl' }, shift: { en: 'Ctrl', ru: 'Ctrl' },
  },
];

export default keyButtons;
