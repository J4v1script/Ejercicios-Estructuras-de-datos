/*
4.- Un almacén tiene capacidad para apilar “n” contenedores. 
Cada contenedor tiene un número de identificación. 
Cuando se desea retirar un contenedor específico, 
deben retirarse primero los contenedores que están encima de él 
y colocarlos en otra pila, efectuar el retiro 
y regresarlos a su respectivo lugar.
*/

console.log("=========== EJERCICIO 4 PILAS =================");

//1. Defiir la clase:

class Almacen{

    //2. Definir los atributos de la clase dentro del constructor:
    constructor(almacen){
        this.almacen = [];
    }

    //3. Definir los metodos de la clase:

    agregar(nuevoContenedor){

        this.almacen.push(nuevoContenedor);
        console.log(`El ${nuevoContenedor} se acaba de agregar al almacen`); //como agregar el nombre de la clase
        console.log('------------------------------------');
    }

    retirar(retirarContenedor){
        
        for(let i = 0; i <= this.almacen.length; i++){

            if(retirarContenedor === this.almacen[i]){

                console.log(`Se encontró el ${retirarContenedor} en la posición ${i} se procede a retirar los contenedores que tiene encima`);
                let separar = this.almacen.length - i;
                let seleccion = i + 1;
                let almacenTemporal = this.almacen.splice(seleccion,separar);
                console.log(`Se retiraron los contenedores de encima y el almacen Temporal tiene por ahora: ${almacenTemporal}`);
                console.log(`El almacen Principal tiene por ahora: ${this.almacen}`);

                this.almacen.pop(1); 
                console.log(`Se retiro el ${retirarContenedor} del almacen Principal y tiene por ahora: ${this.almacen}`);
                
                for(let t = 0; t < almacenTemporal.length; t++){

                    this.almacen.push(almacenTemporal[t]);
                    console.log(`Se regresa el contenedor ${almacenTemporal[t]} del alamcen Temporal al almacen Principal`);

                }

                console.log(`El almacen Principal tiene finalmente: ${this.almacen}`);
                




            }

        }

    }

}

let almacenPrincipal = new Almacen();
let nuevoContenedor;

nuevoContenedor = 'contenedor#1';
almacenPrincipal.agregar(nuevoContenedor);

nuevoContenedor = 'contenedor#2';
almacenPrincipal.agregar(nuevoContenedor);

nuevoContenedor = 'contenedor#3';
almacenPrincipal.agregar(nuevoContenedor);

nuevoContenedor = 'contenedor#4';
almacenPrincipal.agregar(nuevoContenedor);

nuevoContenedor = 'contenedor#5';
almacenPrincipal.agregar(nuevoContenedor);



// let retirarContenedor;
retirarContenedor = "contenedor#3";
almacenPrincipal.retirar(retirarContenedor);


