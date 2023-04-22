import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// src
import Experience from './experience.js';

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;

    this.createPerspectiveCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.perspectiveCamera.position.z = 1175;
    this.scene.add(this.perspectiveCamera);
  }

  setOrbitControls() {
    this.orbitControlWebGL = new OrbitControls(
      this.perspectiveCamera,
      this.canvas
    );
    this.orbitControlWebGL.enableDamping = true;
    this.orbitControlWebGL.enableZoom = true;
    this.orbitControlWebGL.enablePan = true;
    this.orbitControlWebGL.target.set(0, 0, 0);
  }

  resize() {
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();
  }

  update() {
    this.orbitControlWebGL.update();
  }
}
