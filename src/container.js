import * as THREE from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// src
import Experience from './experience';

export default class Container {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.createElement();
  }

  createElement() {}

  resize() {}

  update() {}
}
