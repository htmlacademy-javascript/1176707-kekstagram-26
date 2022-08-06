import { pictures } from './miniature.js';
import { openPictureModal, closePictureModal } from './full-util.js';

const picture = pictures.querySelectorAll('.picture');
const closeButton = document.querySelector('.big-picture__cancel');

for(let i = 0; i < picture.length; i++) {
  picture[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    openPictureModal(i);
  });

  picture[i].addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      openPictureModal(i);
    }
  });

  closeButton.addEventListener('click', () => {
    closePictureModal();
  });

  closeButton.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      evt.preventDefault();
      closePictureModal();
    }
  });
}
