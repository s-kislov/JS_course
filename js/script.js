let num = 266219;
let split = num.toString().split('');
let result = 1;

for (let i = 0; i < split.length; i++) {
    result *= split[i];
}

console.log(split);
console.log(result);
console.log('Произведение цифр числа ' + num + ' = ' + result);
console.log((result **3) .toString().slice(0, 2));

// 
