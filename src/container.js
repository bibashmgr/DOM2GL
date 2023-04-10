import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// src
import Experience from './experience';

// utils
import { status } from './utils/utils';
export default class Container {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setCard();
  }

  setCard() {
    this.element = document.createElement('div');
    this.element.className = 'card';

    // card-body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    this.element.appendChild(cardBody);

    const cardAvatar = document.createElement('img');
    cardAvatar.src = 'textures/avatar.svg';
    cardAvatar.className = 'card-avatar';
    cardBody.appendChild(cardAvatar);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardBody.appendChild(cardTitle);

    const cardTitleFullname = document.createElement('p');
    cardTitleFullname.className = 'card-title-fullname';
    cardTitleFullname.innerHTML = 'Bibash Magar';
    cardTitle.appendChild(cardTitleFullname);

    const cardTitleUsername = document.createElement('p');
    cardTitleUsername.className = 'card-title-username';
    cardTitleUsername.innerHTML = '@bibash.mgr';
    cardTitle.appendChild(cardTitleUsername);

    // card-footer
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    this.element.appendChild(cardFooter);

    for (let i = 0; i < 3; i++) {
      this.createStatus(cardFooter, status[i].title, status[i].subtitle);
    }

    const objectCSS = new CSS3DObject(this.element);
    objectCSS.position.x = 0;
    objectCSS.position.y = 0;
    objectCSS.position.z = 0;

    this.scene.add(objectCSS);
  }

  createStatus(el, title, subtitle) {
    let cardStatus = document.createElement('div');
    cardStatus.className = 'card-status';

    let cardStatusTitle = document.createElement('div');
    cardStatusTitle.className = 'card-status-title';
    cardStatusTitle.innerHTML = title;
    cardStatus.appendChild(cardStatusTitle);

    let cardStatusSubTitle = document.createElement('div');
    cardStatusSubTitle.className = 'card-status-subtitle';
    cardStatusSubTitle.innerHTML = subtitle;
    cardStatus.appendChild(cardStatusSubTitle);

    el.appendChild(cardStatus);
  }

  resize() {}

  update() {}
}
