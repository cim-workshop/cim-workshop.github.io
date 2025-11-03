document.querySelectorAll('.thumb').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.querySelector('img').src = img.dataset.large;
    lightbox.classList.add('show');
  });
});

document.querySelector('.lightbox .close').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('show');
});
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('show');
});
