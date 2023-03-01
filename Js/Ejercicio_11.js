//Ejercicio_11

//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let divisores = [2, 3, 5, 7];
let num = parseInt(prompt("Ingrese el número: "));
for (i = 0; i < divisores.length; i++) {
  if (num % divisores[i] == 0) {
    document.write("Es divisible en " + divisores[i] + "<br><br>");
  } else {
    document.write("No es divisible en " + divisores[i] + "<br><br>");
  }
}
