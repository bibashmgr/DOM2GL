import * as THREE from 'three';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// src
import Experience from './experience.js';

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.container = this.experience.container;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.setWebGLRenderer();
    this.setCss3dRenderer();
  }

  setWebGLRenderer() {
    this.webGLRenderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });

    this.webGLRenderer.setSize(this.sizes.width, this.sizes.height);
    this.webGLRenderer.setPixelRatio(this.sizes.pixelRatio);
  }

  setCss3dRenderer() {
    this.css3dRenderer = new CSS3DRenderer({
      element: this.container,
    });
    this.css3dRenderer.setSize(this.sizes.width, this.sizes.height);
  }

  resize() {
    this.webGLRenderer.setSize(this.sizes.width, this.sizes.height);
    this.webGLRenderer.setPixelRatio(this.sizes.pixelRatio);

    this.css3dRenderer.setSize(this.sizes.width, this.sizes.height);
  }

  update() {
    this.webGLRenderer.render(this.scene, this.camera.perspectiveCamera);

    this.css3dRenderer.render(this.scene, this.camera.perspectiveCamera);
  }
}
