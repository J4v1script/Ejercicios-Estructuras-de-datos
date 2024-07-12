/* 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, 
y dos valores también de tipo Number “nuevo” y “viejo”, 
de forma que si el segundo valor aparece en algún lugar de la pila, 
sea reemplazado por el primero (Solo la segunda vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */

console.log("============== EJERCICO 2 ==============");


function reemplazar(arrayNums,nuevo,viejo){

    console.log(`Los valores iniciales del arreglo son: ${arrayNums}`);
    console.log(`Valor de numero nuevo:${nuevo}`);
    console.log(`Valor de numero viejo:${viejo}`);
    

    let encontrado1Vez = 0;

    // se itera el arreglo para buscar el numero viejo:
    for(let i = 0; i <= arrayNums.length; i++){

        if(viejo === arrayNums[i]){

            // si se encuentra por primera vez solo se informa y se agrega al contador de veces encontrado:
            console.log(`SI se encontro el valor viejo de ${viejo} en la posicion numero: ${i} se continua..`);
            encontrado1Vez += 1;

            // Por medio del contador de veces se valida si se encucuentra por segunda vez :
            if(encontrado1Vez == 2){
                // de manera informativa se menciona que se encontró por segunda vez:
                console.log(`Ya se encontro el valor viejo por ${encontrado1Vez} vez se ejcuta el reemplazo`);

                //por medio del metodo splice se identifica la posición donde se encontro por segunda vez
                //se indica las posiciones a eliminar que son las posiciones restantes del arreglo
                // se indica el numero a agregar al final del arreglo despues de la eliminación anterior
                arrayNums.splice(i,arrayNums.length - i,nuevo);

                //se imprime arreglo para validar el resultado:
                console.log(`El resultado despues del reemplazo es: ${arrayNums}`);
                console.log(arrayNums);
                
            }

        }
        

    }


   
}


reemplazar([3,2,3,4,6,8,1,2,5,5],7,2);

