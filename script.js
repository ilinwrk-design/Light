const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');

document.querySelectorAll('[data-lightbox-src]').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.lightboxSrc;
    lightboxImage.alt = button.dataset.lightboxAlt || '';
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
