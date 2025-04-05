const arr1 = ['abc','amar','xyz',98,['hello',78]] 
// shallow copy

const arr2 = [...arr1]
 console.log(arr2);  // output : [ 'abc', 'amar', 'xyz', 98, [ 'hello', 78 ] ]


// deep copy
const arr3 = JSON.parse(JSON.stringify(arr1))
arr3[4][1]= 67;
console.log(arr3);
