/* 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. 
Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. 
Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/


console.log("=========== EJERCICIO 3 PILAS =================");


//1. Defiir la clase:
class Ruta{


    //2. Generar los atributos de la clase dentro del constructor.
    constructor(ruta){
        this.ruta = [];
    }

    //3. Definir los metodos:

    agregar(nuevoDestino){
        this.ruta.push(nuevoDestino);
    }

    mostrarRuta(){

        console.log(`La ruta de IDA es: ${this.ruta}`);

    }

    mostrarRutaRegreso(){

        let rutaRegreso = this.ruta.reverse();
        console.log(`La ruta de REGRESO es: ${rutaRegreso}`);
    }

}

let ruta1 = new Ruta();
let nuevoDestino;

nuevoDestino = 'Origen';
ruta1.agregar(nuevoDestino);
console.log(`${nuevoDestino} se acaba de agregar`);
console.log('------------------------------------');

nuevoDestino = 'Destino1';
ruta1.agregar(nuevoDestino);
console.log(`${nuevoDestino} se acaba de agregar`);
console.log('------------------------------------');

nuevoDestino = 'Destino2';
ruta1.agregar(nuevoDestino);
console.log(`${nuevoDestino} se acaba de agregar`);
console.log('------------------------------------');

nuevoDestino = 'Destino3';
ruta1.agregar(nuevoDestino);
console.log(`${nuevoDestino} se acaba de agregar`);
console.log('------------------------------------');

nuevoDestino = 'Destino4';
ruta1.agregar(nuevoDestino);
console.log(`${nuevoDestino} se acaba de agregar`);
console.log('------------------------------------');

nuevoDestino = 'Destino5';
ruta1.agregar(nuevoDestino);
console.log(`${nuevoDestino} se acaba de agregar`);
console.log('------------------------------------');


ruta1.mostrarRuta();
ruta1.mostrarRutaRegreso();

