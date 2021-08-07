'use strict';

const isNumber = function (n) {
    return !isNaN(+n) && isFinite(n);
};

function randNumber(choice) {
    function getNumber() {
        let number = prompt("Угадай число от 1 до 100");
        if (number === null) {
            alert("Игра окончена");
        }
        else if (!isNumber(number)) {
            alert("Введи число!");
            getNumber();
        }
        else {
            number = +number;
            if (number === choice) {
                alert("Поздравляю, ты угадал!!!");
                return;
            }
            else if (number < choice) {
                alert("Загаданное число больше");
                getNumber();
            }
            else {
                alert("Загаданное число меньше");
                getNumber();
            }
        }
    }
    return getNumber;
}

let getNumber = randNumber(99);

getNumber();