import * as THREE from 'three';
import { EventEmitter } from 'events';

// src
import Experience from '../experience.js';

export default class Resources extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};

    this.loaders.textureLoader = new THREE.TextureLoader();
  }

  startLoading() {}
}
