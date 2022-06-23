/*
Ejercicio 1
- Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales
- PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir
*/
'use strict'

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

if(num1 > num2){
    document.write(num1+" is greater than "+num2+"<br>")
    document.write(num2+" is minor than "+num1+"<br>")
}
else{
    if(num1 == num2){
        document.write(num1+" and "+num2+" are equal")
    }
}



