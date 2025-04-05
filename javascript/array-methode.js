// const fruits = [];
// fruits.push("banana", "apple", "peach"); // push
// console.log(fruits.length); // 3 length

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6


// // foreach
// fruits.forEach( (index,item) => {
//     console.log(`${index} : ${item}`);
    
// })
// console.log(fruits.reverse()) //reverse

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// arr3 = arr1.concat(arr2)
// console.log(arr3)         // concat

// const array9 = [1, 2, 3, 4];

// console.log(array9.fill(70, 1));
// console.log(array9.fill(5, 1));   //fill

const array4 = ['aman','rajdep','virat']
const result = array4.filter((word) => word.length > 4)   // filter
console.log(result);

const array5 = [1,4,7,25]
const map = array5.map ((x) => 5*x);
console.log(map);            // map

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);


