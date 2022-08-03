import { getPhotoInfo } from './photo.js';
import { NEED_MASSIVES } from './data.js';
import './miniature';

const PHOTOS = [];

for(let i = 1; i <= NEED_MASSIVES; i++) {
  PHOTOS.push(getPhotoInfo(i));
}


