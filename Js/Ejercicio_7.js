/* Ejercicio_7*/

let valor = 0;

let num1 = parseInt(
  prompt("Ingrese el primer número: ", "Ingrese el número aquí")
);

let num2 = parseInt(
  prompt("Ingrese el segundo número: ", "Ingrese el número aquí")
);

let num3 = parseInt(
  prompt("Ingrese el tercer número: ", "Ingrese el número aquí")
);

if (num1 > num2 && num1>num3) {
  valor = alert ("El numero mayor es: " + num1);
} else if (num2 > num1 && num2>num3) {
  valor = alert("El numero mayor es: " +num2);
}
 else if (num3> num1 && num3 > num2) {
    valor=alert("El numero mayor es: " + num3);
}

else if (num2>num1 || num3>num1){
  valor=alert("El numero mayor es: " + num2 || num3)
} 

else if(num1 === num2 && num1 === num3) {
    valor=  alert ("Todos los numeros son iguales")
}
else {
    valor=alert("Error al arrojar el resultado, reintente.")
}

