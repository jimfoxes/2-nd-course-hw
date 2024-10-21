//Задание 1
let password = 'пароль';
let askPassword = prompt('Введите пароль')
if (askPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2
let c = -3;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 3
let d = 15;
let e = 150;
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));

switch (true) {
    case monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12:
        alert('Зима');
        break;
    case monthNumber >= 3 && monthNumber <= 5:
        alert('Весна');
        break;
    case monthNumber >= 6 && monthNumber <= 8:
        alert('Лето');
        break;
    case monthNumber >= 9 && monthNumber <= 11:
        alert('Осень');
        break;
    default:
        alert('В году только 12 месяцев, обновите страницу и введите верный номер');
}

//Дополнительные задания

//Задание 1
let num = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(num)) {
    alert('Вы ввели не число');
} else if (num % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}



