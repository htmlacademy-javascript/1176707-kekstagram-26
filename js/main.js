const MAXLENGTH = 140;

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript Источник генератора чисел.


let getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  console.log(getRandomNumber(1, 30));

// https://learn.javascript.ru/string#:~:text=Создайте%20функцию%20truncate(str%2C%20maxlength)%2C%20которая,её%20длина%20стала%20равна%20maxlength источник проверки.

let checkStringLength = function(numberOfLine, MAXLENGTH) {
    return (numberOfLine.length < MAXLENGTH) ? true : false;
}

console.log(checkStringLength(1, MAXLENGTH));
