 function kuchBhi(fn, delay){   // we are creating custom promise 
    let userId;
     console.log(parameters);
    
    return function(...args){    // args mens arguments in js and it is default
        console.log(arguments);
        
        clearTimeout(userId);    // here previous userId is cleared here
        userId = setTimeout(() => {
            fn.apply(this,args)
        },delay)
    }

}

function greet(name){
    console.log(`the username is ${name}`);
}

const aurKuchBhi = kuchBhi(() => greet("rakesh"), 2000);   // here we are doing debouncing
aurKuchBhi()      // Here bounce off functin call
aurKuchBhi()      // Here bounce off functin call
aurKuchBhi()  // here only one last line is executing in curruent code 


