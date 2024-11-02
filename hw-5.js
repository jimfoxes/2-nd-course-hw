//Задание 1
const min = (a, b) => (a < b) ? a : b;

console.log(min(4, 6));

//Задание 2
function isEven(n) {
    if (n % 2 === 0) {
        return 'Число чётное';
    } else {
        return 'Число нечётное';
    }
}

console.log(isEven(2));
console.log(isEven(5));

//Задание 3

function square(n) {
    console.log(n ** 2);
}

square(5);

const square1 = (n) => n ** 2;

console.log(square1(7));

//Задание 4

function helloUserAge() {

    let age = Number(prompt('Сколько Вам лет'));

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
    
}

helloUserAge();

//Задание 5

function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else { 
        return a * b
    }
}

console.log(calc('p', 7));

//Задание 6 

function cubing(userNum) {
    //let userNum = Number(prompt('Введите число'));

    if (isNaN(userNum)) {
        return 'Переданный параметр не является числом'
    } else {
        return `${userNum} в кубе равняется ${userNum ** 3}`
    }

}

for (let i = 0; i <= 10; i++) {

    console.log(cubing(i));
   
}

//Задание 7

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimetr() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimetr: getPerimetr
}

const circle2 = {
    radius: 4,
    methodGetArea: getArea,
    methodGetPerimetr: getPerimetr
}

console.log(circle1.radius);
console.log(circle1.methodGetArea());
console.log(circle1.methodGetPerimetr());
console.log(circle2.radius);
console.log(circle2.methodGetArea());
console.log(circle2.methodGetPerimetr());
