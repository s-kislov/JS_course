'use strict';

let lang = document.getElementsByTagName("html")[0].getAttribute("lang");
let langRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let langEn = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
let namePerson ;
let message ;

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
        console.log('Ошибка');
        break;
}

// массивы
// не смог разобраться как сделать через массивы


// вторая часть задания

namePerson = prompt('Как вас зовут?');
message = (namePerson === 'Артем') ? 'Добро пожаловать, директор' :
        (namePerson === 'Артём') ? 'Добро пожаловать, директор' :
        (namePerson === 'Максим') ? 'Добро пожаловать, преподаватель' : 'Добро пожаловать, студент';



console.log(message);

