'use strict'
/*
Ejercicio 8
Programar una Calculadora:
-Que pida dos numeros por pantalla
-Si se captura un numero mal ( algo no numerico ), que lo vuelva a pedir
- el resultado de Sumar, Restar, multiplicar y dividir esas dos cifras
- se debe mostrar en el cuerpo de la pagina , en una alerta y en la consola
*/

var num1 = prompt("Insert number 1")
var num2 = prompt("Insert number 2")

while(num1 <= 0 || isNaN(num1)){
    if(num1 <= 0 || isNaN(num1)){
        var num1 = prompt("Insert number 1 again")
    }
}

while(num2 <= 0 || isNaN(num2)){
    if(num2 <= 0 || isNaN(num2)){
        var num2 = prompt("Insert number 2 again")
    }
}

function sum(){
    var sum = Number(num1) + Number(num2) 
    console.log(`The sum of ${num1} and ${num2} equals to: ${sum}`)
    document.write(`The sum of ${num1} and ${num2} equals to: ${sum} <br>`)
    alert(`The sum of ${num1} and ${num2} equals to: ${sum}`)
}
function substraction(){
    var sub = Number(num1) - Number(num2)
    console.log(`The substraction of ${num1} and ${num2} equals to: ${sub}`)
    document.write(`The substraction of ${num1} and ${num2} equals to: ${sub} <br>`)
    alert(`The substraction of ${num1} and ${num2} equals to: ${sub}`)
}
function multiplication(){
    var mult = Number(num1) * Number(num2)
    console.log(`The multiplication of ${num1} and ${num2} equals to: ${mult}`)
    document.write(`The multiplication of ${num1} and ${num2} equals to: ${mult} <br>`)
    alert(`The multiplication of ${num1} and ${num2} equals to: ${mult}`)
}
function division(){
    var div = Number(num1) / Number(num2)
    console.log(`The division of ${num1} and ${num2} equals to: ${div}`)
    document.write(`The division of ${num1} and ${num2} equals to: ${div} <br>`)
    alert(`The division of ${num1} and ${num2} equals to: ${div}`)
}

sum()
substraction()
multiplication()
division()
