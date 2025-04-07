const obj1 = {
    fname: 'Amar',
    lname: 'Katodiya',
    getFullname(fname,lname){
        return `Full Name of Person is ${this.fname} ${this.lname}`
    }
}

const obj2 = {
    fname: 'Yash',
    lname: 'Parmar'              // here i had not defined fun getFullname 

}
obj2.__proto__ = obj1; //you should not use it          // here i give all proto property value of obj1 in obj2
 
// thats why we use class with conststuctor method


console.log(obj1.getFullname());
console.log(obj2.getFullname());
