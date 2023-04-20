import * as THREE from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// src
import Experience from './experience';
export default class Container {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.mouse = this.experience.mouse;
    this.scene = this.experience.scene;

    // this.createPlane();
    this.setDomElement();
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

  setDomElement() {
    this.domElement = document.createElement('div');
    this.domElement.className = 'wrapper';

    let nav = this.createElement('nav', 'navbar', this.domElement);
    let navLogo = this.createElement('img', 'navbar-logo', nav);
    navLogo.src = '/vite.svg';

    let navBtn = this.createElement('img', 'navbar-btn', nav);
    navBtn.src = '/menu.svg';

    let heroSection = this.createElement(
      'main',
      'hero-section',
      this.domElement
    );
    let heroHeader = this.createElement(
      'p',
      'hero-section-header',
      heroSection,
      "Hello! I'm Bibash. I am a Full-Stack Developer & UI/UX Designer."
    );

    let aboutSection = this.createElement(
      'section',
      'about-section',
      this.domElement,
      'This is About Section'
    );
    let projectSection = this.createElement(
      'section',
      'project-section',
      this.domElement,
      'This is Project Section'
    );
    let contactSection = this.createElement(
      'section',
      'contact-section',
      this.domElement,
      'This is Contact Section'
    );
    let footerSection = this.createElement(
      'footer',
      'footer-section',
      this.domElement,
      'This is Footer Section'
    );

    this.cssObj = new CSS3DObject(this.domElement);
    this.cssObj.position.y = 0;

    this.scene.add(this.cssObj);
  }

  createElement(type, className, parentElement, content) {
    let element = document.createElement(type);
    element.className = className;

    if (content) {
      element.innerHTML = content;
    }

    parentElement.appendChild(element);
    return element;
  }

  resize() {}

  update() {
    this.mouse.posY += this.mouse.speed;
    this.mouse.speed *= 0.9;
    this.mouse.rounded = Math.round(this.mouse.posY);

    let diff = this.mouse.rounded - this.mouse.posY;
    this.mouse.posY += Math.sign(diff) * Math.pow(Math.abs(diff), 0.25) * 0.008;

    console.log(this.mouse.posY, this.mouse.rounded);

    this.cssObj.position.y = this.mouse.posY * this.sizes.height;
  }
}
