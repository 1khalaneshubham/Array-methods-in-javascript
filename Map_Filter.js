
let student = [
    {
        name:"Shubham",
        marks:89,
    },
    {
        name:"pushker",
        marks:39,
    },
    {
        name:"mayur",
        marks:86,
    }];

    let GPA = student.map((el) => {
        return el.marks/11;
    });



let arr = [1,2,3,4,5,6];

let double = arr.map((el) => {
    console.log(el*2);
    return el * 2;
});

let nums = [1,2,3,4,5,6,7,8,9];
let ans = nums.filter((el) => {
    // return el % 2 == 0; // even -> true ,odd -> false
    // return el % 2 != 0; // even -> true ,odd -> false
    return el < 5; // even -> true ,odd -> false
});
