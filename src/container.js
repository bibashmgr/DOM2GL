import * as THREE from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// src
import Experience from './experience';
export default class Container {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // this.createPlane();
    this.createElement();
  }

  // createPlane() {
  //   let planeGeo = new THREE.PlaneGeometry(50, 50, 1, 1);
  //   let planeMat = new THREE.MeshBasicMaterial({
  //     color: 0x000000,
  //     wireframe: true,
  //   });

  //   this.plane = new THREE.Mesh(planeGeo, planeMat);
  //   this.scene.add(this.plane);
  //   this.plane.position.z = -5;
  // }

  createElement() {
    let element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = 'HELLO';

    let obj = new CSS3DObject(element);
    this.scene.add(obj);
  }

  resize() {}

  update() {}
}
