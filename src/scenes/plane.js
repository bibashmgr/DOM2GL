import * as THREE from 'three';

// src
import Experience from '../experience.js';

// shaders
import vertexShader from '../shaders/vertex_shader.glsl';
import fragmentShader from '../shaders/fragment_shader.glsl';

export default class Plane {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setPlane();
  }

  setPlane() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 10, 10);
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {},
      wireframe: true,
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  resize() {}

  update() {}
}
