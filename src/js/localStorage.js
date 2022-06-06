export function setLocalStorage(lang) {
  localStorage.setItem('language', JSON.stringify(lang));
}

export function getLocalStorage() {
  const lang = JSON.parse(localStorage.getItem('language'));
  return lang;
}
