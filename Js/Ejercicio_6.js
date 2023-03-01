/* Ejercicio_6 */
/* Se determina el valor 0 para ambos numeros*/

let valor = 0;

let num1 = parseInt(prompt("¿Qué número es mayor?","Ingresa el primer numero"));

let num2 = parseInt(prompt("¿Qué número es mayor?","Ingresa el segundo numero"));

if(num1>num2){
    valor = num1;
}
else{
    valor = num2;
}
 
if (num1>num2){
    alert("El numero mayor es: " + valor);
}

else {
    alert ("Los numeros son iguales");
}



