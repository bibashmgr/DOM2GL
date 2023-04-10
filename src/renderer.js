import * as THREE from 'three';

import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// src
import Experience from './experience.js';

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.container = this.experience.container;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.setRenderer();
  }

  setRenderer() {
    this.renderer = new CSS3DRenderer({
      element: this.container,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
  }

  update() {
    this.renderer.render(this.scene, this.camera.perspectiveCamera);
  }
}
