'use strict';

// проверяем данные, чтоб являлись числом
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money ;
let income ; 
let addExpenses = []; 
let deposit = confirm('У тебя есть депозит в банке?'); 
let mission = 1000000; 
let period = 12;
let amount ;
let lvlBudget ;

// проверка типа данных через функцию
const showTypeOf = function (data) {
    console.log(data, typeof data);
};

// функция do ... while ... 
let start = function () {
    do {
      money = prompt('Ваш месячный доход');
    } while (!isNumber(money));
};

start();

// спрашиваем данные через массив
const getExpensesMonth = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        addExpenses[i] = prompt('Введите обязательную статью расходов');
  
      let amount;
      do {
        amount = +prompt('Во сколько ' + addExpenses.toLowerCase() + ' обойдется?');
      } while (!isNumber(amount));
  
      sum += +amount;
    }
    console.log(addExpenses);
    return sum;
};

// выводим в переменную данные из функции getExpensesMonth
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ', expensesAmount);

// функция считающая затраты
let getAccumulatedMonth = function (income, addExpenses) {
    return income - addExpenses;
};
// высчитываем бюджет месяца
let budgedMonth = getAccumulatedMonth(money, expensesAmount);

// функция по расчету цели
let getTargetMonth = function (mission, budgedMonth) {
    period = Math.ceil(mission / budgedMonth);
    if (period > 0) {
      console.log("Цель будет достигнута за " + period + " месяца");
    } else {
      console.log("Цель не будет достигнута");
    }
};
// выводим результат вы консоль
getTargetMonth(mission, budgedMonth);

let budgedDay = Math.floor(+budgedMonth / 30);

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
console.log('А на месяц у нас осталось всего ' + budgedMonth + '₽');
console.log('Через ' + Math.ceil(+mission / +budgedMonth) + ' месяцев я добьюсь цели в ' + mission + '₽');
console.log('Средний бюджет на день ' + budgedDay + '₽ и это является' + getStatusIncome(budgedDay));




