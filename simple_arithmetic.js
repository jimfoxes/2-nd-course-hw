

function simpleArithmetic() {
    let numberA = Math.floor(Math.random() * 100) + 1;
    let numberB = Math.floor(Math.random() * 100) + 1;

    const operators = ['+', '-', '*', '/'];

    let randomIndexOperator = Math.floor(Math.random() * (operators.length));
    const taskString = `${numberA} ${operators[randomIndexOperator]} ${numberB}`;

    function checkAnswer(taskResult, userResult) {
        if (taskResult === userResult) {
            const correctUserResult = confirm(`${userResult} это правильное решение! Желаете ли решить что-нибудь ещё?`);
            if(correctUserResult) {
                return correctUserResult && simpleArithmetic();
            } else {
                return correctUserResult;
            }
        } else {
            const incorrectUserResult = confirm(`Неверно\nПравильный ответ ${taskResult}\nЖелаете ли попробовать решить что-нибудь ещё?`);
            if(incorrectUserResult) {
                return incorrectUserResult && simpleArithmetic();
            } else {
                return incorrectUserResult;
            }
        }
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

simpleArithmetic();