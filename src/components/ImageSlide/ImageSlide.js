import {TweenMax} from 'gsap/TweenMax';
import Slideable from '../base/Slideable';

function slideOut (myIndex, newIndex) {
  const dir = (myIndex < newIndex) ? -50 : 150;
  
  TweenMax.to(this.element, 1, {
    left: `${dir}%`,
    onComplete: () => {
      this.element.classList.add('hidden');
      this.element.style.cssText = '';
    }
  });

  console.log('leaving');
}

function slideIn (myIndex, oldIndex) {
  const dir = (myIndex < oldIndex) ? -50 : 150;
  
  this.element.classList.remove('hidden');
  TweenMax.from(this.element, 1, {
    left: `${dir}%`,
    onComplete: () => {
      this.element.style.cssText = '';
    }
  });

  console.log('entering');
}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}