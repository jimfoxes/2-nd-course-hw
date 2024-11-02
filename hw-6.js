// Задание 1

let arr = [1, 5, 4, 10, 0, 3];

for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

// Задание 2

for (let i=0; i < arr.length; i++) {
    
    if (arr[i] === 4) {
        console.log(i);
        break;
    }
}

// Задание 3

arr = [1, 3, 5, 10, 20];

console.log(arr.join(' '));

// Задание 4

arr = [];

for (let i = 0; i < 3; i++) {
    let arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
    }
    arr.push(arr2);
}

console.log(arr);

// Задание 5

arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// Задание 6

arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();
console.log(arr);

// Задание 7

/*let userNum = Number(prompt('У гадай одно из чисел которые есть в массиве'));
if (arr.includes(userNum)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}*/

// Задание 8

let string = 'abcdef';
arr = string.split('');
arr = arr.reverse();
string = arr.join('');
console.log(string);

// Задание 9

arr = [[1, 2, 3],[4, 5, 6]];
arr2 = [];

for (let i=0; i < arr.length; i++) {
    arr2.push(...arr[i]);
}

console.log(arr2);

// Задание 10

arr = [1, 4, 5, 2, 8, 9, 3];

for (let i=0; i < arr.length; i++) {
    if (i <= arr.length - 2) {
    console.log(arr[i] + arr[i + 1]);
    }
}

// Задание 11

function square(anyArr) {
    return anyArr.map(item => item ** 2);
}

console.log(square(arr));

// Задание 12

function getLenght(anyArr) {
    return anyArr.map(item => item.length);
}

console.log(getLenght(['hello', 'world', 'totaliti']));

// Задание 13

function filterNegativeValues(anyArr) {
    return anyArr.filter(item => item < 0);
}

console.log(filterNegativeValues([15, 30, -8, 6, -2, 44]));

// Задание 14

function randomArr() {
    return Math.floor(Math.random() * 10);
}

arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(randomArr());    
}

console.log(arr);

evenArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    }
}

console.log(evenArr);

// Задание 15

arr = [];

for (let i = 0; i < 6; i++) {
    arr.push(randomArr());    
}

console.log(arr);
console.log(arr.reduce((a, b) => a + b) / arr.length);
