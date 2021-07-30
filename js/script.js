/* Первая часть */
let num = 266219;

// разбиваю на числв
let split = num.toString().split('');

console.log(split);

// определяем числа, с которым будем работать во время перебора массива
let result = 1;

console.log(result);

// сам массив перебора и умножаем число выше на результат перебора
for (let i = 0; i < split.length; i++) {
   
    result *= split[i];

}
// выводим получившееся строку + число
console.log('Произведение цифр числа ' + num + ' = ' + result);

/* Вторая часть */
// возводим в степень
let elevate = result **3;

console.log(elevate);

/* Третья часть */
// выводим первые 2 числа степени result
console.log(elevate.toString().slice(0, 2));

//