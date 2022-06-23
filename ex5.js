'use strict'
/*
Ejercicio 5
- Un programa que muestre todos los numeros DIVISORES de un numero que proporcione el usuario
- Los divisores son los números que se consiguen al dividir a otro de manera exacta, es decir, el residuo de la division es CERO
*/

var y = prompt("Introduce a number to obtain its divisors")

console.log(y)
for(var i = 0; i <= Number(y); i++){
    console.log(y)
    if(Number(y)%Number(i) == 0){
        document.write(i+"<br>")
    }
}