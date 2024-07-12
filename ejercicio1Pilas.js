/*
Ejercicio 1 : Pilas.
1.- Hacer una función que reciba como parámetros una pila, y un número. 
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].

*/

console.log("============== EJERCICO 1 ==============");

class Pila {

    //2. Generar los atributos de la clase dentro del constructor.
    constructor(datos,numero) {
        this.datos = [];
        this.numero = numero
    }

    //3. Generar los métodos de la clase.

    // Método enqueue (Se agrega un elemento al final de la cola)
    agregar(nuevoElemento){
        this.datos.push(nuevoElemento);
    }




    // Método La función debe retornar tantos elementos como diga el número (segundo parámetro).
    retornar(cant) {
            
        console.log(`Dentro de la funcion numero equivale a: ${cant}`);
        console.log(`Dentro de la funcion retornar la pila tiene: ${this.datos}`);
        let paquete = this.datos.slice(0,cant);
        console.log(`Dentro del paquete hay: ${paquete}`);

    }

}

//Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)

let pila1 = new Pila([]);
let nuevoElemento;

nuevoElemento = 'Manzana';
pila1.agregar(nuevoElemento);
console.log(`${nuevoElemento} se acaba de agregar`);
console.log('------------------------------------');

nuevoElemento = 'Cebolla';
pila1.agregar(nuevoElemento);
console.log(`${nuevoElemento} se acaba de agregar`);
console.log('------------------------------------');

nuevoElemento = 'Apio';
pila1.agregar(nuevoElemento);
console.log(`${nuevoElemento} se acaba de agregar`);
console.log('------------------------------------');

nuevoElemento = 'Naranja';
pila1.agregar(nuevoElemento);
console.log(`${nuevoElemento} se acaba de agregar`);
console.log('------------------------------------');

nuevoElemento = 'Papaya';
pila1.agregar(nuevoElemento);
console.log(`${nuevoElemento} se acaba de agregar`);
console.log('------------------------------------');

nuevoElemento = 'Sandia';
pila1.agregar(nuevoElemento);
console.log(`${nuevoElemento} se acaba de agregar`);
console.log('------------------------------------');

nuevoElemento = 'Melon';
pila1.agregar(nuevoElemento);
console.log(`${nuevoElemento} se acaba de agregar`);
console.log('------------------------------------');


// console.log(`Afuera la pila es:  ${pila1.datos}`);
// console.log(`Afuera el numero es: ${pila1.numero}`);



// Se manda llamar a la funcion y se le indica cuantas posiciones requiere retornar en tu paquete:
pila1.retornar(4);



