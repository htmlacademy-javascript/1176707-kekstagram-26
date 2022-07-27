const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
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
const PHOTOS = [];

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {MESSAGE, NAMES, MIN_LIKES, MAX_AVATARS, MAX_LIKES, NEED_MASSIVES, PHOTOS, getRandomNumber};
