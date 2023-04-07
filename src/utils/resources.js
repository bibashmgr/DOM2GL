import * as THREE from 'three';
import { EventEmitter } from 'events';

// src
import Experience from '../experience.js';

export default class Resources extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    this.items = {};
    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};

    this.loaders.textureLoader = new THREE.Texture();
  }

  startLoading() {
    const data =
      '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"> <foreignObject x="0" y="0" width="100%" height="100%"> <div xmlns="http://www.w3.org/2000/xhtml"><p id="text">Hello World</p></div></foreignObject></svg>';
    const svgBlob = new Blob([[data]], { type: 'image/svg+xml' });
  }
}
