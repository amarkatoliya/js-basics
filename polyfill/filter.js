const arr = [1,2,3,4,5,6,7,8,9,10]

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(userFun){
        const arr1 = []
        
            for(let i=0; i < this.length; i++){
                if(userFun(this[i])){
                arr1.push(this[i])
                }
            }
        

        return arr1;
    }
}

const result = arr.myfilter((e) => e%2 == 0)

console.log(result);
