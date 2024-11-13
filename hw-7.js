//Задание 1

let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2
function filter(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter(['кот', 'корова', 'конь', 'гусь'], 'ко'));

//Задание 3
let num = 32.58884;
console.log(Math.floor(num));  
console.log(Math.ceil(num));  
console.log(Math.round(num));  

//Задание 4
let nums = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...nums)); 
console.log(Math.max(...nums)); 

//Задание 5
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(randomNumber());

//Задание 6

function randomArr(num) {
    let arr = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
        arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}

console.log(randomArr(8));

//Задание 7

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(getRandomNumberInRange(5, 10));

//Задание 8

console.log(new Date());

//Задание 9

let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

function formatDate(date) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`
}

console.log(formatDate(new Date()));
