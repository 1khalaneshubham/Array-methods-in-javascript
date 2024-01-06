
let arr = [2,4,6,8,10];
let arr1 = [3,6,9];
let arr2 = [5,10,15];
let arr3 = [10,20,30];

console.log(arr.every((B) => B % 2 == 0));
console.log(arr1.every((B) => B % 3 == 0));
console.log(arr2.every((B) => B % 5 == 0));
console.log(arr3.every((B) => B % 10 == 0));

let arr4 = [2,4,3,8,10];
let arr5 = [3,4,9];
let arr6 = [5,9,15];
let arr7 = [10,19,30];

console.log(arr4.some((B) => B % 2 == 0));
console.log(arr5.some((B) => B % 3 == 0));
console.log(arr6.some((B) => B % 5 == 0));
console.log(arr7.some((B) => B % 10 == 0));