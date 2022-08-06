import { PHOTOS } from './miniature.js';

const userVisible = document.querySelector('.big-picture');
const modalOpen = document.querySelector('body');
const comentList = userVisible.querySelector('.social__comments');
const comment = comentList.querySelector('.social__comment');

const createNewComment = function (photo, element) {
  for(let i = 0; i < photo.comments.length; i++) {
    const newComment = comment.cloneNode(true);
    newComment.querySelector('.social__picture').src = photo.comments[i].avatar;
    newComment.querySelector('.social__text').textContent = photo.comments[i].message;
    element.append(newComment);
  }
};

function renderPicture(index) {
  userVisible.querySelector('.big-picture__img').querySelector('img').src = PHOTOS[index].url;
  userVisible.querySelector('.likes-count').textContent = PHOTOS[index].likes;
  userVisible.querySelector('.comments-count').textContent = PHOTOS[index].comments.length;
  userVisible.querySelector('.social__caption').textContent = PHOTOS[index].description;
  createNewComment(PHOTOS[index], comentList);
}

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePictureModal();
  }
};

function closePictureModal() {

  userVisible.classList.add('hidden');
  modalOpen.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

function openPictureModal(index) {
  comentList.innerHTML = '';
  userVisible.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  userVisible.querySelector('.social__comment-count').classList.add('hidden');
  userVisible.querySelector('.comments-loader').classList.add('hidden');
  renderPicture(index);

  document.addEventListener('keydown', onPopupEscKeydown);
}

export { closePictureModal, openPictureModal };
