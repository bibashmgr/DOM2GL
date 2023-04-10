import * as THREE from 'three';

// src
import Camera from './camera.js';
import Renderer from './renderer.js';

// utils
import Sizes from './utils/sizes.js';
import Time from './utils/time.js';

import Container from './container.js';

export default class Experience {
  static instance;

  constructor(container) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    this.container = container;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes();
    this.time = new Time();
    this.camera = new Camera();
    this.renderer = new Renderer();

    this.container = new Container();

    this.sizes.on('resize', () => {
      this.resize();
    });
    this.time.on('update', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
    this.container.update();
  }
}
