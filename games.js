function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    let userNumber = Number(prompt('Угадайте число от 1 до 100'));
    console.log(userNumber);

    while (true) {
        if (isNaN(userNumber)) {
            userNumber = Number(prompt('Вы ввели текст, а мы угадываем число. Введите пожалуста число от 1 до 100'));
        } 
        else if (randomNumber === userNumber) {
           return alert(`Поздравляем вы угадали!`);
        }
        else if (randomNumber > userNumber) {
            numberGreater = confirm('Не угадали! Загаданное число БОЛЬШЕ, чем то которое вы ввели, желаете ли попробовать ещё раз?');
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

}

function simpleArithmetic() {
    let numberA = Math.floor(Math.random() * 100) + 1;
    let numberB = Math.floor(Math.random() * 100) + 1;

    const operators = ['+', '-', '*', '/'];

    let randomIndexOperator = Math.floor(Math.random() * (operators.length));
    const taskString = `${numberA} ${operators[randomIndexOperator]} ${numberB}`;

    function checkAnswer(taskResult, userResult) {
        let userInput;
        if (taskResult === userResult) {
            userInput = confirm(`${userResult} это правильное решение! Желаете ли решить что-нибудь ещё?`);
        } else {
            userInput = confirm(`Неверно\nПравильный ответ ${taskResult}\nЖелаете ли попробовать решить что-нибудь ещё?`);
        }
        return userInput && simpleArithmetic();
    }

    if(typeof operators[randomIndexOperator] === 'string' && /[/]/.test(operators[randomIndexOperator])) {
        const taskResult = Math.round(eval(taskString)*100) / 100;
        const userResult = +prompt(`Привет, реши задачку!\n${taskString}\nЕсли число получается не целым, то округлите до сотых,\nв качестве разделителя используйте точку.`);
        checkAnswer(taskResult, userResult);
    } else if(typeof operators[randomIndexOperator] === 'string' && /[+\-\*]/.test(operators[randomIndexOperator])) {
        const taskResult = eval(taskString);
        const userResult = +prompt(`Привет, реши задачку!\n ${taskString}`);
        checkAnswer(taskResult, userResult);
    } 
    
}

function flipText() {
    let word = prompt('Введите слово, которое хотели бы перевернуть');
    let drow = word.toLowerCase().split('').reverse().join('');
    userInput = confirm(`Если перевернуть слово "${word}" то получим "${drow}"\nХотите перевернуть ещё какое-нибудь слово?`);
    return userInput && flipText();
}

// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет у неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function quizFunc() {
    let countCorrectAnsvers = 0;
    for (let i = 0; i < quiz.length; i++) {
        let quizQuestion = Number(prompt(`Выберите правильный ответ:\n${quiz[i].question}\n${quiz[i].options}`));
        if (!quizQuestion){
            return alert('Некорректный ввод'); 
        } else if (quizQuestion === quiz[i].correctAnswer){
            countCorrectAnsvers++;
            alert('Вы ответили верно');
        } else{
            alert('Это не верный ответ');
        }
    }
    return alert(`Вы ответили верно на ${countCorrectAnsvers} вопроса`);
}

function stoneScissorsPaper() {
    const options = ["камень", "ножницы", "бумага"];
    let userOption = prompt('Что выбераете? Камень, ножницы или бумагу?').toLowerCase();

    if (!options.includes(userOption)) {
        alert('Возможные варианты только "камень", "ножницы" или "бумага"');
        return stoneScissorsPaper();
      } 

    let randomOption = options[Math.floor(Math.random() * options.length)];
    console.log(randomOption);

    const winner = {
        камень: "ножницы",
        бумага: "камень",
        ножницы: "бумага"
    }

    if (userOption === randomOption) {
        return alert(`Компьютер тоже выбрал "${randomOption}". Ничья!`);
    } else if (winner[userOption] === randomOption) {
        return alert(`Компьютер выбрал "${randomOption}". Вы победили!`);
    } else {
        return alert(`Компьютер выбрал "${randomOption}". Вы проиграли!`);
    }
    
}

function changeBackgroundColor() {
    const aboutGamesEl = document.querySelector('.about-games');
    const miniGamesEl = document.querySelector('.minigames');
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    aboutGamesEl.style.transition = '0.7s';
    miniGamesEl.style.transition = '0.7s';
    aboutGamesEl.style.backgroundColor = color;
    miniGamesEl.style.backgroundColor = color;
};