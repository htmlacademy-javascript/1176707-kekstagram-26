
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

const getComment = function (id) {
  return {
    id: id,
    avatar: `img/avatar-${getRandomNumber(0, MAX_AVATARS)}.svg`,
    message:MESSAGE[getRandomNumber(0, MESSAGE.length - 1)],
    name:NAMES[getRandomNumber(0, NAMES.length - 1)]
  };
};

for(let i = 0; i <= 6; i++) {
  COMMENTS.push(getComment(COMMENTS.length));
}

const getPhotos = function () {
  for(let i = 1; i <= NEED_MASSIVES; i++) {
    PHOTOS[`photo${  i}`] = {};
  }
};

const getPhotosId = function () {
  for(let i = 1; i <= NEED_MASSIVES; i++) {
    PHOTOS[`photo${  i}`]['id'] = i;
  }
};

const getPhotosUrl = function () {
  for(let i = 1; i <= NEED_MASSIVES; i++) {
    PHOTOS[`photo${  i}`]['url'] = `photos/${  i  }.jpg`;
  }
};

const getPhotosDescription = function () {
  for(let i = 1; i <= NEED_MASSIVES; i++) {
    PHOTOS[`photo${  i}`]['description'] = 'Прекрасный пейзаж.';
  }
};

const getPhotosLikes = function () {
  for(let i = 1; i <= NEED_MASSIVES; i++) {
    PHOTOS[`photo${  i}`]['likes'] = getRandomNumber(MIN_LIKES, MAX_LIKES);
  }
};

const getPhotosComments= function () {
  for(let i = 1; i <= NEED_MASSIVES; i++) {
    PHOTOS[`photo${  i}`]['comment'] = COMMENTS[getRandomNumber(0, MAX_AVATARS)];
  }
};

getPhotos();
getPhotosId();
getPhotosUrl();
getPhotosDescription();
getPhotosLikes();
getPhotosComments();
