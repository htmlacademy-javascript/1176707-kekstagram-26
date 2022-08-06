import { NEED_MASSIVES } from './data.js';
import { getPhotoInfo } from './photo.js';

const userVisibleMiniature = document.querySelector('.pictures__title');
userVisibleMiniature.classList.remove('visually-hidden');

const NEW_PICTURE_TEMPLATE = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const PHOTOS = [];
const pictures = document.querySelector('.pictures');

for (let i = 1; i <= NEED_MASSIVES; i++)  {
  PHOTOS.push(getPhotoInfo(i));
}

const photoFragment = document.createDocumentFragment();

PHOTOS.forEach (({url, likes, comments}) => {
  const newPicture = NEW_PICTURE_TEMPLATE.cloneNode(true);
  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  newPicture.querySelector('.picture__likes').textContent = likes;

  photoFragment.append(newPicture);
});

pictures.append(photoFragment);

export { pictures, PHOTOS };
