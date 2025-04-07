class Adress {
    constructor(city, state){          // if not called then default created
        this.city = city;
        this.state = state;

    }

    getFulladress(){
        return `Adress is ${this.city} from ${this.state}`
    }
}

const ad1 = new Adress('Gandhinagar', 'Gujarat')        // new keyword assign new memory to object
const ad2 = new Adress('Pune', 'Maharastra')

console.log(ad1.getFulladress());
console.log(ad2.getFulladress());



