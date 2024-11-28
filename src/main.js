import { swiperGallery } from './js/gallery';
import './js/scroll-up.js';
import './js/header.js';
import './js/modal.js';
import accordionFaq from './js/faq.js';

swiperGallery();

const button = document.getElementById('button-google');

button.addEventListener('click', function () {
  button.disabled = true;
});
