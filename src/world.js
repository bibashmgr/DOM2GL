import * as THREE from 'three';

// src
import Experience from './experience';
export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.mouse = this.experience.mouse;
    this.gui = this.experience.gui;
  }

  resize() {}

  update() {}
}
