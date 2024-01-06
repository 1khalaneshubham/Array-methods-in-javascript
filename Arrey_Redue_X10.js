// check the all numbers in our array are multiple of 10 or not.




let arr = [10,20,30,40,60,,60,40,70];
// let arr = [10,20,30,40,60,55,60,40,70];

let ans = arr.every((el) => el % 10 == 0);

console.log(val);

// Create a function to find the min no. in an array

let nums = [8,7,6,4,3,2,0];

let min = nums.reduce((min,el) => {
    if(min < el){
        return min;
    }else{
        return el;
    }
});

console.log(min);