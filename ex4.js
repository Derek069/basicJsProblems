'use strict'
/*
Ejercicio 4
- Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario
*/
var x = prompt("Introduce number 1: ")
var y = prompt("Introduce number 2: ")

for(var i = Number(x); i <= y; i++){
    if(Number(i)%2 > 0){
        document.write(i+"<br>")
    }
}
