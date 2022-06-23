'use strict'
/*
Ejercicio 6
Hacer un programa que nos diga si es Par e Inpar
1.- Ventana Promt
2.- Si no es valido que nos pida de nuevo el Numero
*/

var num = prompt("Intorduce a number to know if its even or odd")

if(Number(num)%2 == 0){
    alert(`The number ${num} is even`)
}
if(Number(num)%2 == !0){
    alert(`The number ${num} is odd`)
}