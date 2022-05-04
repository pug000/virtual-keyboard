import Container from './js/Container.js';
import keyButtons from './keyButtons.js';

const container = new Container(keyButtons);
document.body.appendChild(container.init());
