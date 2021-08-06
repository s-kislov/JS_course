'use strict';

let money = Number(prompt('Ваш месячный доход?', 30000));
let income = 'Подбираю на улице'; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = confirm('У тебя есть депозит в банке?'); 
let mission = 1000000; 
let period = 12;
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько ' + expenses1.toLowerCase() + ' обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько ' + expenses2.toLowerCase() + ' обойдется?');
let budgedMonth = +money - (amount1 + amount2);
let budgedDay = Math.floor(+budgedMonth / 30);
let lvlBudget ;

const showTypeOf = function (data) {
    console.log(data, typeof data);
};

const getExpensesMonth = function (amounts) {
    let result = 0;
    for (let amount of amounts)
        result += amount;
    return result;
};

const getAccumulatedMonth = function (money, amounts) {
    return money - getExpensesMonth(amounts);
};

const getTargetMonth = function (accumulatedMonth, mission) {
    return Math.ceil(mission / accumulatedMonth);
};

const getStatusIncome = function (budgedDay) {
    switch (true) {
        case budgedDay > 1201 :
            return (' очень высоким уровнем дохода');
        case 601 < budgedDay < 1200:
            return (' средним уровнем дохода');
        case 0 < budgedDay < 600:
            return (' низким уровнем дохода');
        case budgedDay < 0:
            return (' плохим показателем. Вы — банкрот.');
        default :
            return (' странным бюджетом, т.к мы не смогли его определить.');
    }
};


// вывод в консол
console.log('Наш доход за месяц равен ' + money + '₽');
console.log(deposit);
console.log(expenses1 + ' нам обходится в ' + amount1 + '₽');
console.log(expenses2 + ' нам обходится в ' + amount2 + '₽');
console.log('А на месяц у нас осталось всего ' + budgedMonth + '₽');
console.log('Через ' + Math.ceil(+mission / +budgedMonth) + ' месяцев я добьюсь цели в ' + mission + '₽');
console.log('Средний бюджет на день ' + budgedDay + '₽ и это является' + getStatusIncome(budgedDay));




