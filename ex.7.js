'use strict'
/*
Ejercicio 7
Hacer un programa con las tabla(s) de multiplicar
1.- Para el Numero Introducido ( Ventana Promt)
2.- PLUS: Para todas las tablas de Multiplicar del 1 hasta el Numero Introducido
*/
var num = prompt("Intorduce a number to obtain its basic multiplications")

for(var i = Number(num); i >= 1; i--){
    document.write(`${i} x 1 = `+(Number(i)*1)+"<br>")
    document.write(`${i} x 2 = `+(Number(i)*2)+"<br>")
    document.write(`${i} x 3 = `+(Number(i)*3)+"<br>")
    document.write(`${i} x 4 = `+(Number(i)*4)+"<br>")
    document.write(`${i} x 5 = `+(Number(i)*5)+"<br>")
    document.write(`${i} x 6 = `+(Number(i)*6)+"<br>")
    document.write(`${i} x 7 = `+(Number(i)*7)+"<br>")
    document.write(`${i} x 8 = `+(Number(i)*8)+"<br>")
    document.write(`${i} x 9 = `+(Number(i)*9)+"<br>")
    document.write(`${i} x 10 = `+(Number(i)*10)+"<br>")
}