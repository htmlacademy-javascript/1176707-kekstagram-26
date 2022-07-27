import { getRandomNumber, NEED_MASSIVES, MAX_LIKES, MAX_AVATARS, MESSAGE, NAMES, MIN_LIKES, PHOTOS} from './data.js';

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

for(let i = 1; i <= NEED_MASSIVES; i++) {
  PHOTOS.push(getPhotoInfo(i));
}

export {getPhotoInfo};
