let nums = [1,2,3,4,5,6,7,8,9,10];

// let finVal = nums.reduce((R,E) => R + E);

let finVal = nums.reduce((R,E) => { 

    console.log(R);
     return R + E;
});

console.log(finVal);