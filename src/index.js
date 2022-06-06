import Container from './js/Container';
import Keyboard from './js/Keyboard';
import Textarea from './js/Textarea';
import keyButtons from './js/keyButtons';
import Background from './js/Background';
import './style.scss';

window.onload = () => {
  const lang = JSON.parse(localStorage.getItem('language'));
  const container = new Container();
  const background = new Background();
  const textarea = new Textarea();
  const keyboard = new Keyboard(textarea.initTextarea(), keyButtons, lang);

  document.body.appendChild(background.initBackground());
  document.body.appendChild(container.init());
  container.init().appendChild(textarea.initTextarea());
  container.init().appendChild(keyboard.initKeyboard());
};
