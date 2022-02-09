import '@/styles/index.scss'
import Siema from 'siema';

const siemaSlider = new Siema({
  selector: '.testimonials-carousel-container',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

document.querySelector('.carousel-control.left').addEventListener('click', () => siemaSlider.prev());
document.querySelector('.carousel-control.right').addEventListener('click', () => siemaSlider.next());
