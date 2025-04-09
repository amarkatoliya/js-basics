function calculateInt (value){
    return value>1000 ? value*0.9 :value
}

console.log(calculateInt(2000));
console.log(calculateInt(1200));
console.log(calculateInt(1199));

function checktruthyValue(value) {
    if (value) {
      console.log("Truthy");
    } else {
      console.log("Falsy");
    }
  }

  checktruthyValue('')     //f
  checktruthyValue('1')    //t
  checktruthyValue("amar") //t
  checktruthyValue("")     //f
  checktruthyValue(0)      //f
  checktruthyValue(1)      //t
  checktruthyValue([])     //t
  checktruthyValue( )      //f