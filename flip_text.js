function flipText() {
    let word = prompt('Введите слово, которое хотели бы перевернуть');
    let drow = word.toLowerCase().split('').reverse().join('');
    userInput = confirm(`Если перевернуть слово "${word}" то получим "${drow}"\nХотите перевернуть ещё какое-нибудь слово?`);
    return userInput && flipText();
}

