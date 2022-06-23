'use strict'
/*
Ejercicio 2
- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
- hasta introducir un numero negativo y ahi mostrar el resultado
*/

var num = 0
var x = 1
var result = 0
var cont = 0

while(x > 0){
    var x = prompt("Insert numbers to sum and to obtain their average(insert a negative number to stop) ")
    var result = Number(x) +Number(result)
    cont++
}
var avr = (Number(result)+1)/(Number(cont)-1)
document.write("The sum of those numebrs is: "+(result-Number(x)+"<br>"))
document.write("The average of those numbers is: "+(avr))