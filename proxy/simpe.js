const arr = [1,2,3,4,5,6,7,8,9,10];



function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index]
            }
            else target[index]   
        },
        set(target,prop,value){
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index] =value;
            }
            else {
                target[index] = value 
            }
                return true;
        }  
    })
}

let Arr = negativeIndex(arr)
console.log(Arr[-1]);
console.log(arr[-1]);  // undefined
Arr[-1] = 22;
console.log(Arr);      // if i change shallow copy of arr then it change original array
console.log(arr);      


/


