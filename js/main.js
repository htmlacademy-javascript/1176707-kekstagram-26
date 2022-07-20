const MAXLENGTH = 140;
const MAXNUMBER = 30;

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript Источник генератора чисел.

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// eslint-disable-next-line no-console
console.log(getRandomNumber(1, MAXNUMBER));

// https://learn.javascript.ru/string#:~:text=Создайте%20функцию%20truncate(str%2C%20maxlength)%2C%20которая,её%20длина%20стала%20равна%20maxlength источник проверки.

// eslint-disable-next-line no-shadow
function checkStringLength (numberOfLine, MAXLENGTH) {
  return (numberOfLine.length < MAXLENGTH);
}

// eslint-disable-next-line no-console
console.log(checkStringLength(1, MAXLENGTH));
