
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

const PHOTOS = {
  PHOTO1 : {
    id: 1,
    url: 'photos/1.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO2: {
    id: 2,
    url: 'photos/2.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO3: {
    id: 3,
    url: 'photos/3.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO4: {
    id: 4,
    url: 'photos/4.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO5: {
    id: 5,
    url: 'photos/5.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO6: {
    id: 6,
    url: 'photos/6.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO7: {
    id: 7,
    url: 'photos/7.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO8: {
    id: 8,
    url: 'photos/8.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO9: {
    id: 9,
    url: 'photos/9.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO10: {
    id: 10,
    url: 'photos/10.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO11: {
    id: 11,
    url: 'photos/11.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO12: {
    id: 12,
    url: 'photos/12.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO13: {
    id: 13,
    url: 'photos/13.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO14: {
    id: 14,
    url: 'photos/14.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO15: {
    id: 15,
    url: 'photos/15.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO16: {
    id: 16,
    url: 'photos/16.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO17: {
    id: 17,
    url: 'photos/17.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO18: {
    id: 18,
    url: 'photos/18.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO19: {
    id: 19,
    url: 'photos/19.jpg',
    description: 'Замечательный пейзаж.',
    likes: 1,
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO20: {
    id: 20,
    url: 'photos/20.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO21: {
    id: 21,
    url: 'photos/21.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO22: {
    id: 22,
    url: 'photos/22.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO23: {
    id: 23,
    url: 'photos/23.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO24: {
    id: 24,
    url: 'photos/24.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
  PHOTO25: {
    id: 25,
    url: 'photos/25.jpg',
    description: 'Замечательный пейзаж.',
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[getRandomNumber(0, MAX_AVATARS)],
  },
};
console.log(PHOTOS);