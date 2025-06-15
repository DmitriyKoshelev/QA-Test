// //Перевірка масиву  
// ✏️ Напиши функцію, яка перевіряє, чи є input масивом.  
// Тестові дані:  
// console.log(isArray('QA DOJO')); // false  
// console.log(isArray([1, 2, 4, 0])); // true    

function isArray(input) {
    return Array.isArray(input);
}

console.log(isArray('QA DOJO')); 
console.log(isArray([1, 2 ,3 ,0]));

// Клонування масиву  
// ✏️ Напиши функцію для створення копії масиву.  
// Тестові дані:  
// console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]  
// console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]    

function cloneArray(arr) {
    return arr.slice();
}
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

// Перші елементи масиву  
// ✏️ Напиши функцію для отримання перших n елементів масиву.  
// Тестові дані:  
// console.log(first([7, 9, 0, -2])); // 7  
// console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]    

function first(arr, n = 1) {
    if (n === 1) {
        return arr[0];
    } else {
        return arr.slice(0, n);
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2], 3));

// Останні елементи масиву  
// ✏️ Напиши функцію для отримання останніх n елементів масиву.  
// Тестові дані:  
// console.log(last([7, 9, 0, -2])); // -2  
// console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]    

function last(arr, n = 1) {
    if (n === 1) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(-n);
    }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));

// Об’єднання елементів масиву  
// ✏️ Напиши програму, що об'єднує елементи масиву у строку.   (гугліть як це зробити)
// Приклад:  
// myColor = ["Red", "Green", "White", "Black"];  
// "Red,Green,White,Black"  
// "Red+Green+White+Black"    

const myColor = ["Red", "Green", "White", "Black"];
function joinArray(arr, join = ',') {
   return arr.join(join);
}
console.log(joinArray(myColor));
console.log(joinArray(myColor, '+'));

//  Сортування масиву  
// ✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
// Приклад:  
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];  
// // Вивід: -4,-3,1,2,3,5,6,7,8    
// ЦИКЛИ

const arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr.sort((a, b) => a - b);
console.log(arr.join(','));

