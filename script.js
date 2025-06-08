const header = document.getElementById('scroll-header');
const triggerPoint = window.innerHeight * 0.6;

window.addEventListener('scroll', () => {
  if (window.scrollY > triggerPoint) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

if (window.scrollY > threshold) {
  stickyHeader.style.display = 'flex';
  setTimeout(() => stickyHeader.classList.add('show'), 10);
  header.style.opacity = '0';
} else {
  stickyHeader.classList.remove('show');
  setTimeout(() => stickyHeader.style.display = 'none', 300);
  header.style.opacity = '1';
}
