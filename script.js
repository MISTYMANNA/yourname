const header = document.getElementById('scroll-header');
const triggerPoint = window.innerHeight * 0.6;

window.addEventListener('scroll', () => {
  if (window.scrollY > triggerPoint) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
