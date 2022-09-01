const myName: string = 'Diego';
const myAge = 28;

const suma = (a: number, b: number): number => a + b;
console.log(suma(myAge, myAge));

class Persona{

    constructor(private name: string,private age: number){}

    getSummary(){
        return `${this.name} is ${this.age} years old`;
    }
}

const diego = new Persona(myName, myAge);

