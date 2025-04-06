const array = [1,2,3,4,5]
 
// now we want to build custom mapf function

if(!Array.prototype.myMap){
    Array.prototype.myMap= function(userFun){
        const result = [];
    
        for(let i=0; i<this.length ;i++){
            const value = userFun(this[i] , i);
            result.push(value);
        }
        return result
    }
}


arr1 = array.myMap((a) => a*2)
console.log(arr1);
