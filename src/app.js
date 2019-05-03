import './less/index.less';

import Card from './components/Card/Card';
import ImageSlide from './components/ImageSlide/ImageSlide';
import SlideTracker from './components/SlideTracker/SlideTracker';
import { gotoIndex, incIndex, decIndex } from './stateManagement/actions';


// The if statements are basically just a hack to prevent console errors when the about page is loaded.
const cards = document.body.querySelectorAll('.card-track section.info-card');
if (cards) {
  cards.forEach((e, i) => {
    Card(e, i, "Card");
  });
}


const imageContainer = document.body.querySelectorAll('section.image-container img');
if (imageContainer) {
  imageContainer.forEach((e, i) => {
    ImageSlide(e, i, "ImageSlide");
  });
}

const slideTracker = document.body.querySelector('.slide-tracker');
if (slideTracker) {
  new SlideTracker(slideTracker);
}



// setInterval(() => {
//   incIndex();
// }, 10000);
