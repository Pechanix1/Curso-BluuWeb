// var vs let vs const

//var edad = 10;
//var edad = 20;


//let edad = 10;
const edad = 10;
const edad_1 = 15;

if(true){
    let edad = 20;
    console.log(edad)
}

console.log(edad);
console.log(edad_1)
//console.log(edad2)


let arrayNumero = [10,20,30]
arrayNumero = [10,20,30,40]

const arrayNumber = [10,20,30]
arrayNumber.push(40)


console.log(arrayNumber)

const persona = {
    nombre: 'Juanito',
    edad: 20
}

persona.edad = 21
persona.pais = 'Mexico'

console.log(persona)

