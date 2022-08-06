import { pictures, PHOTOS } from './miniature.js';

const userVisible = document.querySelector('.big-picture');
const modalOpen = document.querySelector('body');
const picturesList = pictures;
const picture = picturesList.querySelectorAll('.picture');
const closeButton = document.querySelector('.big-picture__cancel');
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

for(let i = 0; i < picture.length; i++) {
  picture[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    userVisible.classList.remove('hidden');
    modalOpen.classList.add('modal-open');

    userVisible.querySelector('.big-picture__img').querySelector('img').src = PHOTOS[i].url;
    userVisible.querySelector('.likes-count').textContent = PHOTOS[i].likes;
    userVisible.querySelector('.comments-count').textContent = PHOTOS[i].comments.length;
    userVisible.querySelector('.social__caption').textContent = PHOTOS[i].description;
    createNewComment(PHOTOS[i], comentList);

    userVisible.querySelector('.social__comment-count').classList.add('hidden');
    userVisible.querySelector('.comments-loader').classList.add('hidden');
  });
}


document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    userVisible.classList.add('hidden');
    modalOpen.classList.remove('modal-open');
  }
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  userVisible.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
});
