// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript Источник генератора чисел.

let randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  console.log(randomNumber(1, 30));

// https://learn.javascript.ru/string#:~:text=Создайте%20функцию%20truncate(str%2C%20maxlength)%2C%20которая,её%20длина%20стала%20равна%20maxlength источник проверки.

let maxLength = 140;

let getCheckingTheQuantity = function(numberOfLine, maxLength) {
    if (numberOfLine.length > maxLength) {
        return false;
    } 
    return true;
}

console.log(getCheckingTheQuantity(1, maxLength));