import { TweenMax } from 'gsap/TweenMax';
import Slideable from '../base/Slideable';

function slideOut (myIndex, newIndex) {
  const orientation = (window.innerWidth < 1250) ? 'left' : 'top';
  const dir = (myIndex < newIndex) ? -150 : 150;

  this.element.style.cssText = 'position: absolute';
  TweenMax.to(this.element, 1, {
    [orientation]: `${dir}%`,
    onComplete: () => {
      this.element.classList.add('hidden');
      this.element.style.cssText = '';
    }
  });
  console.log('leaving');
}

function slideIn (myIndex, oldIndex) {
  if (oldIndex === null) return; // No animation on first page load.

  const orientation = (window.innerWidth < 1250) ? 'left' : 'top';
  const dir = (myIndex < oldIndex) ? -150 : 150;
  
  this.element.classList.remove('hidden');
  TweenMax.from(this.element, 1, {
    [orientation]: `${dir}%`,
    onComplete: () => {
      this.element.style.cssText = '';
    }
  });

  console.log('entering');
}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}
