//Ejercicio_11

//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


let num = prompt(
    "Ingresá un número y verificá si es divisible por: 2,3,5 o 7",
    "Ingresá el número aquí"
  );
  if (num % 2 === 0) {
    alert("Es divisible por 2");
  } else if (num % 3 === 0 ) {
    alert("Es divisible por 3");
  } else if (num % 5 === 0) {
    alert("Es divisible por 5");
  } else if (num % 7 === 0) {
    alert("Es divisible por 7");
  } else {
    alert("No es divisble por ninguno de éstos números");
  }