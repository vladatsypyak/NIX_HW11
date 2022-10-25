//________________Task 1___________________
function camelize(str) {
    let arr = str.split("-")
    let result = arr.map((el, index) => {
        if (index) {
            return el[0].toUpperCase() + el.slice(1)
        }
        return el
    })
    return result.join("")
}

// console.log(camelize("my-short-string"));

//________________Task 2___________________


function filterRange(arr, a, b) {
    return arr.filter(el => el >= a && el <= b)
}

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered);
// alert(arr);

//________________Task 3___________________

function filterRangeInPlace(arr, a, b) {
    arr.forEach((el, index) => {
        if (el < a || el > b) {
            arr.splice(index, 1)
        }
    })
}

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // видалені числа поза діапазоном 1..4
// alert(arr ); // [3, 1]

//________________Task 4___________________

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a)
// alert(arr); // 8, 5, 2, 1, -10

//________________Task 5___________________

// let arr = ["HTML", "JavaScript", "CSS"];
//
// function copySorted(arr) {
//     let sorted = [...arr]
//     return sorted.sort()
// }
//
// let sorted = copySorted(arr);
// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без змін)

//________________Task 6___________________

// function calculator() {
//     let a = +prompt('type 1st number')
//     let b = +prompt('type 2nd number')
//     let sign = prompt('type sign')
//     if(sign === "*") alert(a * b)
//     if(sign ==="/") alert(a / b)
//     if(sign === "+") alert(a + b)
//     if(sign ==="-") alert(a - b)
// }
// calculator()
//________________Task 7___________________

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
// let names = users.map(el=>el.name)
//     alert(names)


//________________Task 8___________________

// let vasya = {name : " Вася ", age: 25};
// let petya = {name : " Петя ", age: 30};
// let masha = {name : " Маша ", age: 28};
// let arr = [ vasya , petya , masha ] ;
// function sortByAge(users){
//     return users.sort((a, b) => a.age - b.age)
// }

// console.log(sortByAge(arr));

//________________Task 9___________________

// function getAverageAge(users) {
//     return users.reduce((acc, cur) => acc + cur.age, 0)
// }
//
// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 29};
// let arr = [vasya, petya, masha];
// console.log(getAverageAge(arr));

//________________Task 10___________________
// function unique(arr) {
//     return arr.filter((el, i) => arr.lastIndexOf(el) === i)
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "крішна", ":-O"];
// alert (unique (strings)); // кришна, харе, :-O

//________________Task 11___________________
// function unique(arr) {
//     return [...new Set(arr)]
// }
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "крішна", ":-O"];
// alert(unique(strings)); // кришна, харе, :-O

//________________Task 12___________________
// лічильники незалежні, бо вони створені за допомогою замикання. 2 лічильник покаже те саме, що і перший

//________________Task 13___________________
// лічильник працюватиме, виведе 1, 2 , -2

//________________Task 14___________________
//
// function factorial(n) {
//     return n===1? n : n * factorial(n-1)
// }
//
// console.log(factorial(5));

