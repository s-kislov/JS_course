'use strict';

let lang = document.getElementsByTagName("html")[0].getAttribute("lang");
let langRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let langEn = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
let namePerson ;
let message ;
let arrDays = {ru: langRu, en: langEn};

// if
if (lang === 'ru') {
    console.log(langRu);
} else {
    console.log(langEn);
}

// switch-case
switch (true) {
    case lang === 'en':
        console.log(langEn);
        break;
    case lang === 'ru':
        console.log(langRu);
        break;
    default: 
        console.log('Ошибка/Error');
        break;
}

// массивы
let daysArray = [['ru', 'en'], [arrDays.en, arrDays.ru]];
console.log(daysArray[1][daysArray[0].indexOf(lang)]);

// вторая часть задания
namePerson = prompt('Как вас зовут?');
message = (namePerson === 'Артем') ? 'Добро пожаловать, директор' :
        (namePerson === 'Артём') ? 'Добро пожаловать, директор' :
        (namePerson === 'Максим') ? 'Добро пожаловать, преподаватель' : 
        (namePerson === '') ? 'Добро пожаловать, но пройти вам нельзя. Т.к мы вас не можем идентефицировать' : 'Добро пожаловать, студент';

console.log(message);


  