import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function swiperGallery() {
  new Swiper('.swiper-gallery', {
    modules: [Navigation, Pagination, Keyboard, Mousewheel],
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    cssMode: true,
    mousewheel: false,
    keyboard: true,
    slidesPerView: 1,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
}
