const array = ["raj","vimal","ramesh"]

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function (userFun){
        const final =this;
        for(let i=0; i< this.length; i++){
            userFun(final[i], i)
        }
    }
}

const result = array.myForEach( function(value,index){
    console.log(`the element at ${index} is ${value}`);
    
})
    
console.log(result);


    
 
   