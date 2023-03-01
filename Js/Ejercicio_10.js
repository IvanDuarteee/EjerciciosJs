// Ejercicio_10

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7

let num = prompt("Escribí un nùmero y averigua si es divisible por: 2,3,5,7","Ingresá el número aquí")

if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0)  {
    
    alert("Es divisible por estos nùmeros");
}
else {
    alert("No es divisible por estos números");
}

