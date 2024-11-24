import { swiperGallery } from './js/gallery';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

swiperGallery();

//accordion

const accordionFaq = new Accordion('.accordion-container');

export default accordionFaq;

//Modal

document.getElementById('openModalBtn').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});

const menuLinks = document.querySelectorAll('.header-li');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });
});

document.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('#modal .modal-content');

  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

//pages//
// const tab = document.querySelector('.btn-footer');

// const handleClick = e => {
//   window.open('page-3.html', '_blank');
// };
// tab.addEventListener('click', handleClick);
