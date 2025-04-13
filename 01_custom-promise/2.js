const kuchBhi = (fn,delay) => {
    let userId = null;

    return (...args) => {
        if(userId === null){
            fn(...args);
        userId = setTimeout(() => {
             userId = null;
        },delay)
      }
    }
}

function greet(name){
    console.log(`the username is ${name}`);
}

const aurKuchBhi = kuchBhi(() => greet("Amarrrr"),2000);

aurKuchBhi();    // here throutling is done because only one call is answered & other are not 
aurKuchBhi();
aurKuchBhi();