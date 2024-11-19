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
            return alert ('Некорректный ввод'); 
        } else if (quizQuestion === quiz[i].correctAnswer){
            countCorrectAnsvers++;
            alert('Вы ответили верно');
        } else{
            alert('Это не верный ответ');
        }
    }
    return alert(`Вы ответили верно на ${countCorrectAnsvers} вопроса`);
}