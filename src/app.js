import './less/index.less';

import Card from './components/Card/Card';
import ImageSlide from './components/ImageSlide/ImageSlide';
import SlideTracker from './components/SlideTracker/SlideTracker';
import { gotoIndex, incIndex, decIndex } from './stateManagement/actions';



document.body.querySelectorAll('.card-track section.info-card')
  .forEach((e, i) => {
    Card(e, i, "Card");
  });

document.body.querySelectorAll('section.image-container img')
  .forEach((e, i) => {
    ImageSlide(e, i, "ImageSlide");
  });

new SlideTracker(document.body.querySelector('.slide-tracker'));


setInterval(() => {
  incIndex();
}, 8000);
