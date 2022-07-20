const MAX_LENGTH = 140;
const MAX_NUMBER = 30;

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript Источник генератора чисел.

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.console.log(getRandomNumber(1, MAX_NUMBER));

// https://learn.javascript.ru/string#:~:text=Создайте%20функцию%20truncate(str%2C%20maxlength)%2C%20которая,её%20длина%20стала%20равна%20maxlength источник проверки.
function checkStringLength (string, maxLength) {
  return (string.length < maxLength);
}

window.console.log(checkStringLength(1, MAX_LENGTH));
