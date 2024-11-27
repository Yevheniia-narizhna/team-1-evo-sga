const scrollUpBtn = document.getElementById('scrollUpBtn');

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
};

scrollUpBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
