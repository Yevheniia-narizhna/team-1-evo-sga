import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionFaq = new Accordion('.accordion-container');

export default accordionFaq;

document.getElementById('openModalBtn').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});

document.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('#modal .modal-content');

  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
