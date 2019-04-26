import Slideable from '../base/Slideable';

function slideOut () {
  console.log('leaving');
  this.element.classList.add('hidden');
}

function slideIn () {
  console.log('entering');
  this.element.classList.remove('hidden');
}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}



// export default class Card {
//   constructor (element, index, slideIn, slideOut, type) {
//     this.element = element;
//     this.index = index;
//     this.type = type; // Just a string to make the logs more verbose

//     this.currentIndex = null;
//     this.subscription = store.subscribe((state) => {
//       const {currentIndex: newIndex} = state;

//       if (this.currentIndex === newIndex) { // Looks like something broke, update local state, but don't do anything else.
//         this.currentIndex = newIndex;
//         return; 
//       }

//       if (this.index === newIndex) { // Newly selected, set up and execute in-transition.
//         console.group(`CARD ${this.index}`);
//         this.slideIn();
//         console.groupEnd();
//       }
//       if (this.index === this.currentIndex) { // Already on screen, set up and execute out-transition.
//         console.group(`CARD ${this.index}`);
//         this.slideOut();
//         console.groupEnd();
//       }

//       this.currentIndex = newIndex; // Update local state to test against next time
//     });

//     this.slideIn = slideIn;
//     this.slideOut = slideOut;
//   }

//   slideOut () {
//     console.log('leaving');
//     this.element.classList.add('hidden');
//   }

//   slideIn () {
//     console.log('entering');
//     this.element.classList.remove('hidden');
//   }
// }