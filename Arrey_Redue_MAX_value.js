let arr = [1,2,3,4,2,5,7,53,8,9,6,3,4];

let max = -1; 

for( let i = 0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max);

let H = arr.reduce((H,el) => {
    if(H < el){
        return el;
    }else{
        return H;
    }
});
console.log(H);