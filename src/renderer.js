import * as THREE from 'three';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// src
import Experience from './experience.js';

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.setWebGLRenderer();
  }

  setWebGLRenderer() {
    this.webGLRenderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });

    this.webGLRenderer.setSize(this.sizes.width, this.sizes.height);
    this.webGLRenderer.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.webGLRenderer.setSize(this.sizes.width, this.sizes.height);
    this.webGLRenderer.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.webGLRenderer.render(this.scene, this.camera.perspectiveCamera);
  }
}
