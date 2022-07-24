const ID = [];
const URL = [];
const LIKES = [];
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
  'Виктор',
  'Виктория',
  'Вилен',
  'Виолетта',
  'Виссарион',
  'Вита',
  'Виталий',
  'Влад',
  'Владимир',
  'Владислав',
  'Владислава',
  'Владлен',
  'Вольдемар',
  'Всеволод',
  'Вячеслав'
];

const getPhotosUrl = function () {
  for(let i = 0; i <= 25; i++) {
    URL.push(`photos/${  i  }.jpg`);
  }
};

const getId = function () {
  for(let i = 0; i < 25; i++) {
    ID.push(1 + i);
  }
};

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

LIKES.push(getRandomNumber(15, 200));

getId();
getPhotosUrl();

const getComment = function () {
  return {
    id: ID[getRandomNumber(0,ID.length - 1)],
    avatar: `img/avatar-${getRandomNumber(0, 6)}.svg`,
    message:MESSAGE[getRandomNumber(0, MESSAGE.length - 1)],
    name:NAMES[getRandomNumber(0, NAMES.length - 1)]
  };
};

for(let i = 0; i <= 6; i++) {
  COMMENTS.push(getComment());
};