import Experience from '../experience';

export default class Mouse {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.container = this.experience.container;

    this.speed = 0;
    this.posY = 0;
    this.rounded = 0;

    window.addEventListener('wheel', (e) => {
      this.speed = e.deltaY * 0.0003;
    });
  }
}
