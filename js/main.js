
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENTS = [];
const NAMES = [
  'Вадим',
  'Валентин',
  'Валентина',
  'Валерий',
  'Валерия',
  'Ванда',
  'Варвара',
  'Василий',
  'Василиса',
  'Венера',
  'Вениамин',
  'Вера',
  'Вероника',
  'Викентий',
  'Виктор'
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const NEED_MASSIVES = 25;
const MAX_AVATARS = 6;
const PHOTOS = {};

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

for(let i = 0; i <= 6; i++) {
  COMMENTS.push(getComment(COMMENTS.length));
}

const getPhotoInfo = function (i) {
  PHOTOS[`photo${  i}`] = {};
  PHOTOS[`photo${  i}`]['id'] = i;
  PHOTOS[`photo${  i}`]['url'] = `photos/${  i  }.jpg`;
  PHOTOS[`photo${  i}`]['description'] = 'Прекрасный пейзаж.';
  PHOTOS[`photo${  i}`]['likes'] = getRandomNumber(MIN_LIKES, MAX_LIKES);
  PHOTOS[`photo${  i}`]['names'] = NAMES[getRandomNumber(0, MIN_LIKES)];
  PHOTOS[`photo${  i}`]['comments'] = {};
  for(let b = 0; b < MAX_AVATARS; b++) {
    PHOTOS[`photo${  i}`]['comments'][`comment${  b}`] = COMMENTS[getRandomNumber(0, MAX_AVATARS)];
  }
};

for(let i = 1; i <= NEED_MASSIVES; i++) {
  getPhotoInfo(i);
}
