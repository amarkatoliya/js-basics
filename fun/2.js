function fisrt(){
    console.log('i am fisrt function');    // function declaration
}


const result1 = function two(){
    console.log('i am second function');  // function expression
}

// same way for two is 

const result2 = function three(){
    return a => a*2}   // function expression with aerrow fun

const doubleFun = result2();
console.log(doubleFun(5));


fisrt();
result1();



const multiOpetaion = function(a,b,operation){      // when function return fun then it call as " first class function"
    return function multy(){
        return (a,b) => a*b;        // if you use aerrow fun then you have to called it 
    }
}
const result3 =multiOpetaion()();  // here i have called ()for multy fun and second is for aerrow fun
console.log(result3(5,6));



