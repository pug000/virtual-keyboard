export default class Background {
  constructor() {
    this.background = document.createElement('div');
    this.video = document.createElement('video');
    this.souceMp4 = document.createElement('source');
    this.souceWebm = document.createElement('source');
  }

  initBackground() {
    this.background.className = 'background';
    this.video.setAttribute('autoplay', '');
    this.video.setAttribute('loop', '');
    this.video.setAttribute('playsinline', '');
    this.video.poster = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/14e1a261b94ebe19eac8234a9c7e4abaae1084bb.jpg';
    this.souceMp4.src = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/2fda5d3781c6d198d70775f53809db245151928d.mp4';
    this.souceMp4.type = 'video/mp4';
    this.souceWebm.src = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/c6ec1e32708cb1e403a4c79db03b0128e080e1e8.webm';
    this.souceWebm.type = 'video/webm';
    this.video.muted = true;
    this.background.append(this.video);
    this.video.appendChild(this.souceMp4);
    this.video.appendChild(this.souceWebm);
    return this.background;
  }
}
