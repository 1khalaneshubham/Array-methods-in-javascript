
let arr = [1,2,3,4,5,6];

arr.forEach((el) => {
    console.log(el);

});

arr.forEach(function(el){
    console.log(el);
});
 
let print = function(e){

    console.log(e);

};

arr.forEach(print);

let arrer = [
    {
        name:"Shubham_Khalane",
        marks:95,
    },
    { 
        name:"Pushker_Khalane",
        marks:75,
    },
    { 
        name:"Mayur_Mali",
        marks:85,
    }];

    arrer.forEach((st) => {
        console.log(st.marks);
    })