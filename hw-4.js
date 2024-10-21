/*//Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4

const obj = {
    Коля:'200',
    Вася:'300',
    Петя:'400'
}

for (const key in obj) {
    console.log(`${key} - ${obj[key]}`);
}

//Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}

console.log(`Количество итераций: ${num}`);

//Задание 6

let firstFridey = 2;
let allDay = 31;
for (let i = firstFridey; i < allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}

//Дополнительные задания

//Задание 1 */

let k = 100;
let iterations = 0;

while (k > 0) {
    k -= 7;
    console.log(k);
    iterations++;
}

console.log(`Количество итераций: ${iterations}`);

//Задание 2

const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

for (let i = 1; i <= months.length; i++) {

    console.log(`Месяц ${i} это ${months[i - 1]}`);
         
}

//Задание 3

const book = {
    название: 'Каштанка',
    автор: 'Антон Павлович Чехов',
    "год издания": '2008',
    жанр: 'рассказ'
}

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
 }

 //Задание 4

const arr = [2, 0, 4, 5, 7, 45, 1, 13, 6, 10];

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }   
}

console.log(smallest);




 