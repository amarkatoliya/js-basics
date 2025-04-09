
let case1 = 13;        // Number
let case2 = "Ramesh";  // String
let case3 = undefined; //undefined
let case4 = null;      // Object
let case5 = true;      //boolean
let case6 = 56;

// console.log(typeof(case6));

const array = ['amar','rahul','aniket','yash','viren'];

const result = array.forEach((iteam,index) => (     // forEach in array
    console.log(`${index} : ${iteam}`),
    console.log("-------------------------------------")
    
))

const society = {
    name : 'Gokuldham',
    city : 'Bombey',
    population : 35,
    citizen : ['jethalal','tarak','popatlal','iyer','roshan','bhide'],
    isFlop : true
}

const result1 = society.citizen.forEach((iteam,index) => (     // forEach in array of object
    console.log(`${index} : ${iteam}`),
    console.log("============================")
    
     
))

let {name,city} = society;        // destucture of the object

console.log(city);

// console.log(result);
// console.log(result1);

