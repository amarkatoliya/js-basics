Function.prototype.describe = function(){
    console.log(` Function name is ${this.name} `);
}

 function printMe(name){
    return `Name is ${name}`;
}

printMe.describe();