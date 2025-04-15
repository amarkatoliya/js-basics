let num = 10 ;
function counter(num){
     num =1;           //  here num is declared in fun counter
    return function increment(){   
        num++          // but we can still acess here because of scope is assign to child    
        return num;    // that is called as closure
    }
}

result = counter()

console.log(result(4));
console.log(result());
console.log(result());
console.log(result());


// this example is about understanding of closure in js
function outerfun(){

    let outvariable = 'i am in outer function!';

    function innerfun(){
        console.log(outvariable);   //When myClosure is called, it still remembers the outerVariable from its lexical scope.

    }

    return innerfun;
}
myClousure = outerfun()
myClousure()              // output : i am in outer function    