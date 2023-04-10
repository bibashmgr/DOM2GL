import Experience from './experience';

import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export default class Container {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setElement();
  }

  setElement() {
    this.element = document.createElement('div');
    this.element.className = 'header-container';

    const header = document.createElement('p');
    header.className = 'header';
    header.innerHTML = 'HELLO WORLD';
    this.element.appendChild(header);

    console.log(this.element);

    const objectCSS = new CSS3DObject(this.element);
    objectCSS.position.x = 0;
    objectCSS.position.y = 0;
    objectCSS.position.z = 0;

    console.log(objectCSS);
    this.scene.add(objectCSS);
  }

  resize() {}

  update() {}
}
