import * as THREE from 'three';
import { GUI } from 'dat.gui';

// src
import Camera from './camera.js';
import Renderer from './renderer.js';

// utils
import Sizes from './utils/sizes.js';
import Time from './utils/time.js';
import Mouse from './utils/mouse.js';

import World from './world.js';

export default class Experience {
  static instance;

  constructor(canvas, container) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    // this.canvas = canvas;
    this.container = container;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.sizes = new Sizes();
    this.time = new Time();
    this.mouse = new Mouse();
    this.gui = new GUI();
    this.camera = new Camera();
    this.renderer = new Renderer();

    this.world = new World();

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
    this.world.update();
  }
}
