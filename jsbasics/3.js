//Temporial Dead Zone
//Temporial Dead Zone
//Temporial Dead Zone
//Temporial Dead Zone
test();                     // if we call test brfore initialization it can call because of Hoisting

//                  HOSITING

console.log('Age is',age);  // output : Age is undefined 

// Because here Hoisting is occure but there value of Age cannot access becaue of Temporial Dead Zone

let age = 18;

console.log('Age is',age);  // output : Age is 18

function test(){
    console.log(" i am fun test");
    
}  