import {MESSAGE, NAMES, MIN_LIKES, MAX_AVATARS, MAX_LIKES, NEED_MASSIVES} from './data.js';

const PHOTOS = [];

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getComment = function () {
  return {
    id: getRandomNumber(NEED_MASSIVES,MAX_LIKES),
    avatar: `img/avatar-${getRandomNumber(0, MAX_AVATARS)}.svg`,
    message:MESSAGE[getRandomNumber(0, MESSAGE.length - 1)],
    name:NAMES[getRandomNumber(0, NAMES.length - 1)]
  };
};

const getPhotoInfo = function (id) {
  return {
    id: id,
    url: `photos/${  id  }.jpg`,
    description: 'Прекрасный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomNumber(0,MAX_AVATARS)}, getComment)
  };
};

export {getPhotoInfo, PHOTOS};
