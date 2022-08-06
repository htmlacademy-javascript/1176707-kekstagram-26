import { pictures, PHOTOS } from './miniature.js';
/*
1. Добавить обработчик событий на миниатюру.
2. В обработчике удалять класс hidden у userVisible.
3. Заполнять userVisible информацией.
4. Добавлять класс hidden для .social__comment-count и .comments-loader.
5. Добавить класс modal-open для body.
6. Добавить обработчик событий для кнопки закрытия на клик и клавишу ESC.
*/

const userVisible = document.querySelector('.big-picture');
const modalOpen = document.querySelector('body');
const picturesList = pictures;
const picture = picturesList.querySelectorAll('.picture');
const closeButton = document.querySelector('.big-picture__cancel');


for(let i = 0; i < picture.length; i++) {
  picture[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    userVisible.classList.remove('hidden');
    modalOpen.classList.add('modal-open');

    userVisible.querySelector('.big-picture__img').querySelector('img').src = PHOTOS[i].url;
    userVisible.querySelector('.likes-count').textContent = PHOTOS[i].likes;
    userVisible.querySelector('.comments-count').textContent = PHOTOS[i].comments.length;
    userVisible.querySelector('.social__caption').textContent = PHOTOS[i].description;
    userVisible.querySelector('.social__comments');
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
