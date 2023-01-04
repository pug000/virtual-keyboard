import View from '../common/View';

export default class Background extends View {
  constructor(parent: HTMLElement) {
    super(parent, 'div', 'background');

    this.node.innerHTML = '<video playsinline autoplay loop muted poster="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/14e1a261b94ebe19eac8234a9c7e4abaae1084bb.jpg"><source src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/2fda5d3781c6d198d70775f53809db245151928d.mp4" type="video/mp4"><source src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/c6ec1e32708cb1e403a4c79db03b0128e080e1e8.webm" type="video/webm"></video>';
  }
}
