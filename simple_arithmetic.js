

function simpleArithmetic() {
    let numberA = Math.floor(Math.random() * 100) + 1;
    let numberB = Math.floor(Math.random() * 100) + 1;

    const operators = ['+', '-', '*', '/'];

    let randomIndexOperator = Math.floor(Math.random() * (operators.length));
    if (typeof operators[randomIndexOperator] === 'string' && /[/]/.test(operators[randomIndexOperator])) {
        taskResult = Math.round(eval(`${numberA} ${operators[randomIndexOperator]} ${numberB}`)*100) / 100;
        userResult = prompt(`Привет, реши задачку!\n${numberA} ${operators[randomIndexOperator]} ${numberB}\nЕсли число получается не целым, то округлите до сотых,\nв качестве разделителя используйте точку.`);
        if (taskResult == userResult) {
            correctUserResult = confirm(`${userResult} это правильное решение! Желаете ли решить что-нибудь ещё?`);
            if (correctUserResult == true) {
                simpleArithmetic();
            } else {
                console.log(taskResult);;
            }
        } else {
            incorrectUserResult = confirm(`Неверно\nПравильный ответ ${taskResult}\nЖелаете ли попробовать решить что-нибудь ещё?`);
            if (incorrectUserResult == true) {
                simpleArithmetic();
            } else {
                console.log(taskResult);;
            }
        } 
    } else if (typeof operators[randomIndexOperator] === 'string' && /[+\-\*]/.test(operators[randomIndexOperator])) {
        taskResult = eval(`${numberA} ${operators[randomIndexOperator]} ${numberB}`);
        userResult = prompt(`Привет, реши задачку!\n ${numberA} ${operators[randomIndexOperator]} ${numberB}`);
            if (taskResult == userResult) {
                correctUserResult = confirm(`${userResult} это правильное решение! Желаете ли решить что-нибудь ещё?`);
                if (correctUserResult == true) {
                    simpleArithmetic();
                } else {
                    console.log(taskResult);;
                }
            } else {
                incorrectUserResult = confirm(`Неверно\nПравильный ответ ${taskResult}\nЖелаете ли попробовать решить что-нибудь ещё?`);
                if (incorrectUserResult == true) {
                    simpleArithmetic();
                } else {
                    console.log(taskResult);;
                }
            } 
    } else {
        console.log('error');
    }

    console.log(`${numberA} ${operators[randomIndexOperator]} ${numberB}`);
    
}

simpleArithmetic();