//Задание 1

const headingEl = document.querySelector('.heading');
const btnEl = document.querySelector('.btnT1');
btnEl.addEventListener('click', () => {
    if (headingEl.style.display === 'none') {
        headingEl.style.display = 'block';
    } else {
        headingEl.style.display = 'none';
    }
});

//Задание 2

const paragraph = document.querySelector('.paragraph');
const changeColorButton = document.querySelector('.changeColorButton');

changeColorButton.addEventListener('click', () => {
    paragraph.style.color = 'blue';
});

//Задание 3

const btnChangeText = document.querySelector('.changeText');
btnChangeText.addEventListener('click', () => {
    headingEl.textContent = 'Привет, мир!';
});

//Задание 4

const descriptionEl = document.querySelectorAll('.description');
const btnChangeDescription = document.querySelector('.changeDescription');

console.log(descriptionEl); 

btnChangeDescription.addEventListener('click', () => {
    descriptionEl.forEach((description) => {
        description.textContent = 'Изменённый текст.'; 
    });
});

//Задание 5

const btnTask5 = document.querySelector('.task5');

btnTask5.addEventListener('click', () => {
    for (let i = 0; i < descriptionEl.length; i++) {
        descriptionEl[i].textContent = 'Изменённый текст по заданию 5.';
    }
});

//Задание 6

const button = document.getElementById('addButton');

button.addEventListener('click', () =>{
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

//Задание 7

const btnTask7 = document.querySelector('.task7');
const descriptionsFirstEl = document.querySelector('.description');

btnTask7.addEventListener('click', () => {
    descriptionsFirstEl.remove();
});