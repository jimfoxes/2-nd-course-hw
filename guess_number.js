let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let userNumber = Number(prompt('Угадайте число от 1 до 100'));
console.log(userNumber);

while (true) {
    if (randomNumber === userNumber) {
        alert(`Поздравляем вы угадали!`);
        break;
    }
    else if (randomNumber > userNumber) {
        numberGreater = confirm('Не угадали! Загаданное число БОЛЬШЕ, чем то которое вы ввели, желаете ли попробовать ещё раз?')
        if (numberGreater == true) {
            userNumber = Number(prompt('Попробуйте ещё раз'));
        }
        else break;
    }
    else if (randomNumber < userNumber) {
        numberLess = confirm('Не угадали! Загаданное число МЕНЬШЕ, чем то которое вы ввели, желаете ли попробовать ещё раз?')
        if (numberLess == true) {
            userNumber = Number(prompt('Попробуйте ещё раз'));
        }
        else break;
    }
}