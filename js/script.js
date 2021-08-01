'use strict';

let money ; 
let income = 'Подбираю на улице'; 
let addExpenses ; 
let deposit ; 
let mission = 1000000; 
let period = 12;
let budgedMonth ;
let budgedDay ;
let expenses1 ;
let expenses2 ;
let amount1 ;
let amount2 ;
let lvlBudget ;

// проверяем на введенное число, если нет, уточняем вопрос, 
// если нет, ставим ноль за юзера и выводим Алерт
money = Number(prompt('Ваш месячный доход?', 30000));

if (money) {
    isNaN(money);
} else {
    money = Number(prompt('Так какой ваш месячный доход?', 'Введите сумму числом'));
    if (money) {
        isNaN(money);
    } else {
        money = 0;
        alert('Не можете сделать это сами, мы ввели 0 за вас :)');
    }
}

// выполняем вопрос про расходы
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')

// запрос про депозит 
deposit = confirm('У тебя есть депозит в банке?');

// вопросы про бюджет и затраты
expenses1 = prompt('Введите обязательную статью расходов?');
amount1 = prompt('Во сколько ' + expenses1.toLowerCase() + ' обойдется?');
expenses2 = prompt('Введите обязательную статью расходов?');
amount2 = prompt('Во сколько ' + expenses2.toLowerCase() + ' обойдется?');

// бюджет на месяц за минусом расходов
budgedMonth = (Number(money) - (Number(amount1) + Number(amount2)));

// бюджет на день
budgedDay = Math.floor(+budgedMonth / 30);

// проверка условий по бюджету
switch (true) {
    case budgedDay > 1201 :
        lvlBudget = ' очень высоким уровнем дохода';
        break;
    case 601 < budgedDay < 1200:
        lvlBudget = ' средним уровнем дохода';
        break;
    case 0 < budgedDay < 600:
        lvlBudget = ' низким уровнем дохода';
        break;
    case budgedDay < 0:
        console.log(' плохим показателем. Вы — банкрот.');
        break;
    default :
        console.log(' странным бюджетом, т.к мы не смогли его определить.');
}



// вывод в консол
console.log('Наш доход за месяц равен ' + money + '₽');
console.log(deposit);
console.log(expenses1 + ' нам обходится в ' + amount1 + '₽');
console.log(expenses2 + ' нам обходится в ' + amount2 + '₽');
console.log('А на месяц у нас осталось всего ' + budgedMonth + '₽');
console.log('Через ' + Math.ceil(+mission / +budgedMonth) + ' месяцев я добьюсь цели в ' + mission + '₽');
console.log('Средний бюджет на день ' + budgedDay + '₽ и это является' + lvlBudget);


