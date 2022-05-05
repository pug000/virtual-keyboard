import Container from './js/Container.js';
import Keyboard from './js/Keyboard.js';
import Textarea from './js/Textarea.js';
import keyButtons from './keyButtons.js';

const container = new Container();
const textarea = new Textarea();
const keyboard = new Keyboard(textarea.initTextarea(), keyButtons);

document.body.appendChild(container.init());
container.init().appendChild(textarea.initTextarea());
container.init().appendChild(keyboard.initKeyboard());
