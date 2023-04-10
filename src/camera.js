import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// src
import Experience from './experience.js';

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.container = this.experience.container;

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
    this.perspectiveCamera.position.z = 3000;

    this.scene.add(this.perspectiveCamera);
  }

  setOrbitControls() {
    this.orbitControls = new OrbitControls(
      this.perspectiveCamera,
      this.container
    );
    this.orbitControls.enableDamping = true;
    this.orbitControls.enableZoom = true;
    this.orbitControls.enablePan = true;
    this.orbitControls.target.set(0, 0, 0);
  }

  resize() {
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();
  }

  update() {
    this.orbitControls.update();
  }
}
